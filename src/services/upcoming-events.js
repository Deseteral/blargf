import signale from 'signale';
import compareDates from 'date-fns/compare_asc';
import isToday from 'date-fns/is_today';
import isFuture from 'date-fns/is_future';
import isSameWeek from 'date-fns/is_same_week';
import differenceInDays from 'date-fns/difference_in_days';
import startOfToday from 'date-fns/start_of_today';
import differenceInHours from 'date-fns/difference_in_hours';
import config from '../application/config';
import * as iCalClient from '../clients/ical-client';

const cache = {
  events: [],
  lastUpdateFailed: false,
};

function shortDurationFormat(dateA, dateB) {
  const isHourEvent = differenceInHours(dateB, dateA) % 24 !== 0;
  const isSingleFullDayEvent = differenceInHours(dateB, dateA) === 24;

  const dateFormattingOptions = isHourEvent
    ? { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false } // eslint-disable-line object-curly-newline
    : { month: 'long', day: 'numeric' };
  const formatDate = date => date.toLocaleDateString('en-US', dateFormattingOptions);

  return (isSingleFullDayEvent || isHourEvent)
    ? formatDate(dateA)
    : `${formatDate(dateA)} - ${formatDate(dateB)}`;
}

function mapICalEvent(event) {
  const { summary, start, end } = event;

  return {
    title: summary,
    startDate: start,
    endDate: end,
    date: shortDurationFormat(start, end),
  };
}

function isEventToday(e) {
  return isToday(e.startDate);
}

function isEventThisWeek(e) {
  const isInPreviousCategory = isEventToday(e);
  return isSameWeek(e.startDate, startOfToday(), { weekStartsOn: 1 }) && !isInPreviousCategory;
}

function isEventLater(e) {
  const isInPreviousCategory = isEventThisWeek(e) || isEventToday(e);
  return differenceInDays(e.startDate, startOfToday()) <= 30 && !isInPreviousCategory;
}

async function refreshCache() {
  signale.pending('Updating upcoming events cache...');

  try {
    const events = (await iCalClient.fetchEvents())
      .map(mapICalEvent)
      .sort((e1, e2) => compareDates(e1.startDate, e2.startDate))
      .filter(e => isToday(e.startDate) || isFuture(e.startDate));

    cache.events = [
      {
        name: 'Today',
        eventList: events.filter(isEventToday),
      }, {
        name: 'This week',
        eventList: events.filter(isEventThisWeek),
      }, {
        name: 'Later',
        eventList: events.filter(isEventLater),
      },
    ];

    cache.lastUpdateFailed = false;

    signale.success('Updated upcoming events cache');
  } catch (exception) {
    cache.lastUpdateFailed = true;

    signale.fatal('Could not update upcoming events cache');
    signale.fatal(exception);
  }
}

function getUpcomingEvents() {
  return cache;
}

(function initializeUpcomingEventsModule() {
  setInterval(refreshCache, config.events.refresh_interval_seconds * 1000);
  setImmediate(refreshCache);
}());

export { getUpcomingEvents };

const signale = require('signale');
const compareDates = require('date-fns/compare_asc');
const isToday = require('date-fns/is_today');
const isFuture = require('date-fns/is_future');
const isSameWeek = require('date-fns/is_same_week');
const differenceInDays = require('date-fns/difference_in_days');
const startOfToday = require('date-fns/start_of_today');
const differenceInHours = require('date-fns/difference_in_hours');
const { fetchICalEvents } = require('../services/ical');

const { EVENTS_REFRESH_INTERVAL_SEC } = process.env;

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
  return isSameWeek(e.startDate) && !isEventToday(e);
}

function isEventLater(e) {
  return differenceInDays(e.startDate, startOfToday()) <= 30 && !isEventThisWeek(e);
}

async function refreshCache() {
  signale.pending('Updating upcoming events cache...');

  try {
    const events = (await fetchICalEvents())
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
  signale.info(`EVENTS_REFRESH_INTERVAL_SEC=${EVENTS_REFRESH_INTERVAL_SEC}`);

  setInterval(refreshCache, EVENTS_REFRESH_INTERVAL_SEC * 1000);
  setImmediate(refreshCache);
}());

module.exports = getUpcomingEvents;

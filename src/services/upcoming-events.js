import compareDates from 'date-fns/compare_asc';
import isToday from 'date-fns/is_today';
import isFuture from 'date-fns/is_future';
import isSameWeek from 'date-fns/is_same_week';
import differenceInDays from 'date-fns/difference_in_days';
import startOfToday from 'date-fns/start_of_today';
import differenceInHours from 'date-fns/difference_in_hours';
import ical from 'node-ical';
import registerService from './register-service';
import config from '../application/config';
import { formatAsDuration } from '../helpers/date-time-formatter';

function fetchICalFromUrl(url) {
  return new Promise((resolve, reject) => {
    ical.fromURL(url, {}, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const events = Object.keys(data)
        .map(key => data[key])
        .filter(event => !!event.summary);

      resolve(events);
    });
  });
}

async function fetchEvents() {
  const iCalSourceUrls = config().events.ical_urls;
  return (await Promise.all(iCalSourceUrls.map(fetchICalFromUrl))).flat();
}

function shortDurationFormat(dateA, dateB) {
  const isHourEvent = differenceInHours(dateB, dateA) % 24 !== 0;
  const isSingleFullDayEvent = differenceInHours(dateB, dateA) === 24;

  const dateFormattingOptions = isHourEvent
    ? { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false } // eslint-disable-line object-curly-newline
    : { month: 'long', day: 'numeric' };
  const formatDate = date => date.toLocaleDateString('en-US', dateFormattingOptions);

  return (isSingleFullDayEvent || isHourEvent)
    ? `${formatDate(dateA)}, ${formatAsDuration(dateA)}`
    : `${formatDate(dateA)} - ${formatDate(dateB)}, ${formatAsDuration(dateA)}`;
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

async function dataProvider() {
  const events = (await fetchEvents())
    .map(mapICalEvent)
    .sort((e1, e2) => compareDates(e1.startDate, e2.startDate))
    .filter(e => isToday(e.startDate) || isFuture(e.startDate));

  return [
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
}

const getUpcomingEvents = registerService({
  name: 'upcoming events',
  refreshInterval: config().tasks.refresh_interval_seconds,
  dataProvider,
  initialData: [],
  fieldName: 'events',
});

export { getUpcomingEvents };

import compareDates from 'date-fns/compare_asc';
import isToday from 'date-fns/is_today';
import isFuture from 'date-fns/is_future';
import isSameWeek from 'date-fns/is_same_week';
import differenceInDays from 'date-fns/difference_in_days';
import startOfToday from 'date-fns/start_of_today';
import differenceInHours from 'date-fns/difference_in_hours';
import ical from 'node-ical';
import registerService, { DataCache } from '../../services/register-service';
import config from '../../config';
import { formatAsDuration } from '../../helpers/date-time-formatter';
import { CalendarEvent, EventGroup } from './model';

export function isVEvent(value: ical.CalendarComponent): value is ical.VEvent {
  return value.type === 'VEVENT';
}

function fetchICalFromUrl(url: string): Promise<ical.CalendarComponent[]> {
  return new Promise((resolve, reject) => {
    ical.fromURL(url, {}, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const events = Object.keys(data)
        .map((key) => data[key])
        .filter((event) => !!event.summary);

      resolve(events);
    });
  });
}

async function fetchEvents(): Promise<ical.CalendarComponent[]> {
  const iCalSourceUrls = config().events.icalUrls;
  return (await Promise.all(iCalSourceUrls.map(fetchICalFromUrl))).flat();
}

function shortDurationFormat(dateA: Date, dateB: Date): string {
  const isHourEvent = differenceInHours(dateB, dateA) % 24 !== 0;
  const isSingleFullDayEvent = differenceInHours(dateB, dateA) === 24;

  const dateFormattingOptions: Intl.DateTimeFormatOptions = isHourEvent
    ? { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }
    : { month: 'long', day: 'numeric' };
  const formatDate = (date: Date): string => date.toLocaleDateString('en-US', dateFormattingOptions);

  return (isSingleFullDayEvent || isHourEvent)
    ? `${formatDate(dateA)}, ${formatAsDuration(dateA)}`
    : `${formatDate(dateA)} - ${formatDate(dateB)}, ${formatAsDuration(dateA)}`;
}

function mapICalEvent(event: ical.VEvent): CalendarEvent {
  const { summary, start, end } = event;

  return {
    title: summary,
    startDate: start,
    endDate: end,
    date: shortDurationFormat(start, end),
  };
}

function isEventToday(e: CalendarEvent): boolean {
  return isToday(e.startDate);
}

function isEventThisWeek(e: CalendarEvent): boolean {
  const isInPreviousCategory = isEventToday(e);
  return isSameWeek(e.startDate, startOfToday(), { weekStartsOn: 1 }) && !isInPreviousCategory;
}

function isEventLater(e: CalendarEvent): boolean {
  const isInPreviousCategory = isEventThisWeek(e) || isEventToday(e);
  return differenceInDays(e.startDate, startOfToday()) <= 30 && !isInPreviousCategory;
}

async function dataProvider(): Promise<EventGroup[]> {
  const events = (await fetchEvents())
    .filter(isVEvent)
    .map(mapICalEvent)
    .sort((e1, e2) => compareDates(e1.startDate, e2.startDate))
    .filter((e) => isToday(e.startDate) || isFuture(e.startDate));

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

const [getUpcomingEvents] = registerService<EventGroup[], DataCache<EventGroup[]>>({
  name: 'upcoming events',
  refreshInterval: config().tasks.refreshIntervalSeconds,
  dataProvider,
  initialData: [],
  getter: (cache, _) => cache,
});

export { getUpcomingEvents };

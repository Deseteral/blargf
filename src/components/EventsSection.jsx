import React from 'react';
import Card from './Card';
import CardHeader from './CardHeader';
import Caption from './Caption';
import EventList from './EventList';

function EventsSection({ upcomingEvents }) {
  const { events, lastUpdateFailed } = upcomingEvents;

  return (
    <Card>
      <CardHeader>Upcoming events</CardHeader>
      {events.map(event => (
        <EventList name={event.name} list={event.eventList} />
      ))}
      {lastUpdateFailed && (
        <Caption error>
          List might be outdated because of failed update.
        </Caption>
      )}
      <Caption>
        Plan your events in <a href="https://calendar.google.com/calendar/">Google Calendar</a>.
      </Caption>
    </Card>
  );
}

export default EventsSection;

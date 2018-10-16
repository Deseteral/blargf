import React from 'react';
import Card from './Card';
import Caption from './Caption';
import EventList from './EventList';

function EventsSection({ upcomingEvents }) {
  const { events, lastUpdateFailed } = upcomingEvents;

  return (
    <Card title="Upcoming events">
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

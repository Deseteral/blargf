import React from 'react';
import Card from './atomic/Card';
import CardHeader from './atomic/CardHeader';
import Caption from './atomic/Caption';
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
    </Card>
  );
}

export default EventsSection;

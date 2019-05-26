import React from 'react';
import Card from './atomic/Card';
import CardHeader from './atomic/CardHeader';
import Caption from './atomic/Caption';
import EventList from './EventList';

function EventsSection({ upcomingEvents }) {
  const { data, lastUpdateFailed } = upcomingEvents;

  return (
    <Card>
      <CardHeader>Upcoming events</CardHeader>
      {data.map((event, idx) => (
        <EventList name={event.name} list={event.eventList} key={idx} />
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

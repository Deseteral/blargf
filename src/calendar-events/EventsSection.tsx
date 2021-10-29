import React from 'react';
import Card from '../components/atomic/Card';
import CardHeader from '../components/atomic/CardHeader';
import Caption from '../components/atomic/Caption';
import EventList from './EventList';
import { EventListViewModel } from './model';
import { DataCache } from '../services/register-service';

export interface EventsSectionProps {
  upcomingEvents: DataCache<EventListViewModel>,
}

function EventsSection({ upcomingEvents }: EventsSectionProps): JSX.Element {
  const { data, lastUpdateFailed } = upcomingEvents;

  return (
    <Card>
      <CardHeader>Upcoming events</CardHeader>
      {data.map((event, idx) => (
        <EventList name={event.name} eventList={event.eventList} key={idx} />
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

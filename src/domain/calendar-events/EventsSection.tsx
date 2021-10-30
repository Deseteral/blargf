import React from 'react';
import Card from '../../components/Card';
import CardHeader from '../../components/CardHeader';
import Caption from '../../components/Caption';
import EventList from './EventList';
import { DataCache } from '../../services/register-service';
import { EventGroup } from './model';

export interface EventsSectionProps {
  upcomingEvents: DataCache<EventGroup[]>,
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

import React from 'react';
import EventList from './EventList';

function EventSection({ name, eventList }) {
  if (eventList.length === 0) return null;

  return (
    <div className="events-subsection">
      <h2>{name}</h2>
      <EventList eventList={eventList} />
    </div>
  );
}

export default EventSection;

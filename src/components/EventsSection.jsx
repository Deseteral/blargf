import React from 'react';
import EventSection from './EventSection';

function EventsSection({ upcomingEvents }) {
  const { events, lastUpdateFailed } = upcomingEvents;

  return (
    <section className="card">
      <h1>Upcoming events</h1>
      {events.map(event => <EventSection name={event.name} eventList={event.eventList} />)}
      {lastUpdateFailed && (
        <div className="caption caption--small caption--error">
          List might be outdated because of failed update.
        </div>
      )}
      <p className="caption">
        Plan your events in <a href="https://calendar.google.com/calendar/">Google Calendar</a>.
      </p>
    </section>
  );
}

export default EventsSection;

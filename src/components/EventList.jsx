import React from 'react';

function EventList({ eventList }) {
  return (
    <ul className="events-list">
      {eventList.map(e => (
        <li className="events-list-element">
          <div>{e.title}</div>
          <div className="caption">{e.date}</div>
        </li>
    ))}
    </ul>
  );
}

export default EventList;

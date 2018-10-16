import React from 'react';
import CardHeader from './CardHeader';
import Caption from './Caption';

function EventList({ name, list }) {
  if (list.length === 0) return null;

  return (
    <div className="events-subsection">
      <CardHeader subheader>{name}</CardHeader>
      <ul className="events-list">
        {list.map(e => (
          <li className="events-list-element">
            <div>{e.title}</div>
            <Caption>{e.date}</Caption>
          </li>
      ))}
      </ul>
    </div>
  );
}

export default EventList;

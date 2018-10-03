import React from 'react';
import { getFormattedDate, getFormattedTime } from '../data/date-time';

function DateTimeSection() {
  return (
    <section className="date-time-section card">
      <div className="time">{getFormattedTime()}</div>
      <div className="date">{getFormattedDate()}</div>
    </section>
  );
}

export default DateTimeSection;

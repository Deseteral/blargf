import React from 'react';
import Card from './atomic/Card';
import { getFormattedDate, getFormattedTime } from '../services/date-time';

function DateTimeSection() {
  return (
    <Card height="170px">
      <div className="time">{getFormattedTime()}</div>
      <div className="date">{getFormattedDate()}</div>
    </Card>
  );
}

export default DateTimeSection;

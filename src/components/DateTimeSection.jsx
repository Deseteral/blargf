import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './atomic/Card';
import { getFormattedDate, getFormattedTime } from '../services/date-time';

const Time = styled.div`
  align-self: center;
  font-size: 120px;
  font-weight: 100;
  opacity: 0.56;
`;

const Date = styled.div`
  font-size: 26px;
  font-weight: 300;
`;

function DateTimeSection() {
  const [formattedTime, setFormattedTime] = useState(getFormattedTime());
  useEffect(() => {
    setInterval(() => setFormattedTime(getFormattedTime()), 1000);
  }, []);

  return (
    <Card>
      <Time id="time">{formattedTime}</Time>
      <Date>{getFormattedDate()}</Date>
    </Card>
  );
}

export default DateTimeSection;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../components/atomic/Card';
import { getFormattedDate, getFormattedTime } from '../helpers/date-time-formatter';

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

function DateTimeSection(): JSX.Element {
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

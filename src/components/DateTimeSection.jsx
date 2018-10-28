import React from 'react';
import styled from 'react-emotion';
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
  return (
    <Card height="170px">
      <Time>{getFormattedTime()}</Time>
      <Date>{getFormattedDate()}</Date>
    </Card>
  );
}

export default DateTimeSection;

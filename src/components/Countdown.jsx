import React from 'react';
import styled from 'react-emotion';
import Text from './atomic/Text';
import Caption from './atomic/Caption';

const TimerContainer = styled.div`
  margin-bottom: 8px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

function Countdown({ title, date }) {
  return (
    <TimerContainer>
      <Text>{title}</Text>
      <Caption data-countdown data-countdown-date={date}>
        1d 23h 12m 18s
      </Caption>
    </TimerContainer>
  );
}

export default Countdown;

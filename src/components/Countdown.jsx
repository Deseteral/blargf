import React from 'react';
import styled from 'react-emotion';
import formatAsDuration from '../helpers/format-as-duration';
import Text from './atomic/Text';
import Caption from './atomic/Caption';

const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  align-items: baseline;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Title = styled(Text)`
  margin-right: 4px;
`;

function Countdown({ title, date }) {
  const duration = formatAsDuration(new Date(date));

  return (
    <TimerContainer>
      <Title>{title}</Title>
      <Caption data-countdown data-countdown-date={date}>
        {duration}
      </Caption>
    </TimerContainer>
  );
}

export default Countdown;

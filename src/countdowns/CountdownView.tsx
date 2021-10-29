import React from 'react';
import styled from 'styled-components';
import { formatAsDuration } from '../helpers/date-time-formatter';
import Text from '../components/atomic/Text';
import Caption from '../components/atomic/Caption';
import { Countdown } from './model';

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

export type CountdownViewProps = Countdown;

function CountdownView({ title, date }: CountdownViewProps): JSX.Element {
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

export default CountdownView;

import React from 'react';
import Card from '../components/atomic/Card';
import CardHeader from '../components/atomic/CardHeader';
import CountdownView from './CountdownView';
import { Countdown } from './model';

export interface CountdownsSectionProps {
  countdowns: Countdown[],
}

function CountdownsSection({ countdowns }: CountdownsSectionProps): (JSX.Element | null) {
  if (countdowns.length === 0) return null;

  return (
    <Card>
      <CardHeader>Countdowns</CardHeader>
      {countdowns.map((countdown) => (<CountdownView title={countdown.title} date={countdown.date} key={countdown.title} />))}
    </Card>
  );
}

export default CountdownsSection;

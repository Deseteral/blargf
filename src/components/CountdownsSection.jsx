import React from 'react';
import Card from './atomic/Card';
import CardHeader from './atomic/CardHeader';
import Countdown from './Countdown';

function CountdownsSection({ data }) {
  const { list } = data;

  if (list.length === 0) return null;

  return (
    <Card>
      <CardHeader>Countdowns</CardHeader>
      {list.map(countdown => (<Countdown {...countdown} key={countdown.title} />))}
    </Card>
  );
}

export default CountdownsSection;
import React from 'react';
import Card from './atomic/Card';
import CardHeader from './atomic/CardHeader';
import Caption from './atomic/Caption';
import PudeukoItem from './PudeukoItem';

function PudeukoSection({ pudeuko }) {
  const { data, lastUpdateFailed } = pudeuko;

  if (data.length === 0) return null;

  return (
    <Card>
      <CardHeader>pudeuko</CardHeader>
      {data.map(item => (<PudeukoItem item={item} key={item.link.url} />))}
      {lastUpdateFailed && (
        <Caption error>
          List might be outdated because of failed update.
        </Caption>
      )}
    </Card>
  );
}

export default PudeukoSection;

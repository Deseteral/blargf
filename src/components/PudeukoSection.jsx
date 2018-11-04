import React from 'react';
import Card from './atomic/Card';
import CardHeader from './atomic/CardHeader';
import Caption from './atomic/Caption';
import PudeukoItem from './PudeukoItem';

function PudeukoSection({ data }) {
  const { list, lastUpdateFailed } = data;

  if (list.length === 0) return null;

  return (
    <Card>
      <CardHeader>pudeuko</CardHeader>
      {list.map(item => (<PudeukoItem item={item} />))}
      {lastUpdateFailed && (
        <Caption error>
          List might be outdated because of failed update.
        </Caption>
      )}
    </Card>
  );
}

export default PudeukoSection;

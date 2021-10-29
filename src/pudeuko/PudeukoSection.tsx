import React from 'react';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import Caption from '../components/Caption';
import PudeukoListItem from './PudeukoListItem';
import { DataCache } from '../services/register-service';
import { Pudeuko } from './model';

export interface PudeukoSectionProps {
  pudeuko: DataCache<Pudeuko>,
}

function PudeukoSection({ pudeuko }: PudeukoSectionProps): (JSX.Element | null) {
  const { data, lastUpdateFailed } = pudeuko;

  // TODO: Add proper error handling
  if (!data || !data.items || data.items.length === 0) return null;

  return (
    <Card>
      <CardHeader>pudeuko</CardHeader>
      {data.items.map((item) => (<PudeukoListItem item={item} key={item.id} />))}
      {lastUpdateFailed && (
        <Caption error>
          List might be outdated because of failed update.
        </Caption>
      )}
    </Card>
  );
}

export default PudeukoSection;

import fetch from 'node-fetch';
import registerService, { DataCache } from '../../services/register-service';
import config from '../../config';
import { Pudeuko } from './model';

async function fetchPudeukoData(): Promise<Pudeuko> {
  const response = await fetch(`${config().pudeuko.serviceUrl}/pudeuko`);
  const data = response.json();
  return data;
}

const [getPudeukoData, refreshCache] = registerService<Pudeuko, DataCache<Pudeuko>>({
  name: 'pudeuko',
  refreshInterval: config().pudeuko.refreshIntervalSeconds,
  dataProvider: fetchPudeukoData,
  initialData: { items: [] },
  getter: (cache, _refreshCache) => cache,
});

async function deletePudeukoItem(itemId: string): Promise<void> {
  await fetch(
    `${config().pudeuko.serviceUrl}/pudeuko/${itemId}`,
    { method: 'DELETE' },
  );

  refreshCache();
}

export { getPudeukoData, deletePudeukoItem };

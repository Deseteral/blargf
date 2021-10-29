import fetch from 'node-fetch';
import registerService, { DataCache } from '../services/register-service';
import config from '../application/config';
import { Pudeuko } from './model';

async function fetchPudeukoData(): Promise<Pudeuko> {
  const response = await fetch(`${config().pudeuko.service_url}/pudeuko`);
  const data = response.json();
  return data;
}

const [getPudeukoData, refreshCache] = registerService<Pudeuko, DataCache<Pudeuko>>({
  name: 'pudeuko',
  refreshInterval: config().pudeuko.refresh_interval_seconds,
  dataProvider: fetchPudeukoData,
  initialData: { items: [] },
  getter: (cache, _refreshCache) => cache,
});

async function deletePudeukoItem(itemId: string): Promise<void> {
  await fetch(
    `${config().pudeuko.service_url}/pudeuko/${itemId}`,
    { method: 'DELETE' },
  );

  refreshCache();
}

export { getPudeukoData, deletePudeukoItem };

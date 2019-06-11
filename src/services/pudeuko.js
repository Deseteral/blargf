import fetch from 'node-fetch';
import registerService from './register-service';
import config from '../application/config';

async function fetchPudeukoData() {
  const response = await fetch(`${config().pudeuko.service_url}/items`);
  return response.json();
}

const [getPudeukoData, refreshCache] = registerService({
  name: 'pudeuko',
  refreshInterval: config().pudeuko.refresh_interval_seconds,
  dataProvider: fetchPudeukoData,
  initialData: [],
});

async function deletePudeukoItem(itemId) {
  await fetch(
    `${config().pudeuko.service_url}/items/${itemId}`,
    { method: 'DELETE' },
  );

  refreshCache();
}

export { getPudeukoData, deletePudeukoItem };

import fetch from 'node-fetch';
import registerService from './register-service';
import config from '../application/config';

async function fetchPudeukoData() {
  const response = await fetch(`${config().pudeuko.service_url}/items`);
  return response.json();
}

const getPudeukoData = registerService({
  name: 'pudeuko',
  refreshInterval: config().pudeuko.refresh_interval_seconds,
  dataProvider: fetchPudeukoData,
  initialData: [],
});

export { getPudeukoData };

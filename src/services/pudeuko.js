import fetch from 'node-fetch';
import registerService from './register-service';
import config from '../application/config';

async function fetchPudeukoData() {
  const response = await fetch(`${config().pudeuko.service_url}/items`);
  return response.json();
}

const getPudeukoData = registerService({
  refreshInterval: config().pudeuko.refresh_interval_seconds,
  loggerMessages: {
    onPending: 'Updating pudeuko cache...',
    onSuccess: 'Updated pudeuko cache',
    onError: 'Could not update pudeuko cache',
  },
  dataProvider: fetchPudeukoData,
  initialData: [],
  fieldName: 'list',
});

export { getPudeukoData };

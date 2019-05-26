import registerService from './register-service';
import config from '../application/config';

const getCountdownsData = registerService({
  name: 'countdowns',
  refreshInterval: config().countdowns.refresh_interval_seconds,
  dataProvider: async () => config().countdowns.list,
  initialData: [],
  fieldName: 'list',
});

export { getCountdownsData };

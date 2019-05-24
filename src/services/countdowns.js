import registerService from './register-service';
import config from '../application/config';

const getCountdownsData = registerService({
  refreshInterval: config().countdowns.refresh_interval_seconds,
  loggerMessages: {
    onPending: 'Updating countdowns cache...',
    onSuccess: 'Updated countdowns cache',
    onError: 'Could not update countdowns cache',
  },
  dataProvider: async () => config().countdowns.list,
  initialData: [],
  fieldName: 'list',
});

export { getCountdownsData };

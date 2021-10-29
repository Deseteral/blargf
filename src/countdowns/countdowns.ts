import registerService from '../services/register-service';
import config from '../application/config';
import { Countdown } from './model';

const [getCountdownsData] = registerService<Countdown[], Countdown[]>({
  name: 'countdowns',
  refreshInterval: config().countdowns.refresh_interval_seconds,
  dataProvider: async () => config().countdowns.list,
  initialData: [],
  getter: (cache, _) => cache.data,
});

export { getCountdownsData };

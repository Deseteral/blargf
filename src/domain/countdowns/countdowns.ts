import registerService from '../../services/register-service';
import config from '../../config';
import { Countdown } from './model';

const [getCountdownsData] = registerService<Countdown[], Countdown[]>({
  name: 'countdowns',
  refreshInterval: config().countdowns.refreshIntervalSeconds,
  dataProvider: async () => config().countdowns.list,
  initialData: [],
  getter: (cache, _) => cache.data,
});

export { getCountdownsData };

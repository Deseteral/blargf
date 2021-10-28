import { promises as fsp } from 'fs';
import path from 'path';
import registerService from './register-service';
import config from '../application/config';

const [getAlertBannerData] = registerService({
  name: 'alert banner',
  refreshInterval: config().alert_banner.refresh_interval_seconds,
  dataProvider: async () => {
    const filePath = path.join(__dirname, '..', 'alert-banner.md');
    const text = (await fsp.readFile(filePath, { encoding: 'utf8' })).trim();
    return text.length > 0 ? text : null;
  },
  initialData: null,
});

export { getAlertBannerData };

import { promises as fsp } from 'fs';
import path from 'path';
import registerService from '../application/services/register-service';
import config from '../application/config';
import { AlertBannerContent } from './model';

async function dataProvider(): Promise<AlertBannerContent> {
  const filePath = path.join(__dirname, '..', 'alert-banner.md');
  const text = (await fsp.readFile(filePath, { encoding: 'utf8' })).trim();
  return (text.length > 0) ? text : null;
}

const [getAlertBannerData] = registerService<AlertBannerContent, AlertBannerContent>({
  name: 'alert banner',
  refreshInterval: config().alert_banner.refresh_interval_seconds,
  dataProvider,
  initialData: null,
  getter: (cache, _) => cache.data,
});

export { getAlertBannerData };

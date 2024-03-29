import { promises as fsp } from 'fs';
import path from 'path';
import registerService from '../../services/register-service';
import config from '../../config';
import { AlertBannerContent } from './model';

async function dataProvider(): Promise<AlertBannerContent> {
  const filePath = path.join(__dirname, '..', 'alert-banner.md');
  const text = (await fsp.readFile(filePath, { encoding: 'utf8' })).trim();
  return (text.length > 0) ? text : null;
}

const [getAlertBannerData] = registerService<AlertBannerContent, AlertBannerContent>({
  name: 'alert banner',
  refreshInterval: config().alertBanner.refreshIntervalSeconds,
  dataProvider,
  initialData: null,
  getter: (cache, _) => cache.data,
});

export { getAlertBannerData };

import signale from 'signale';
import config from '../application/config';
import * as PudeukoClient from '../clients/pudeuko-client';

const cache = {
  list: [],
  lastUpdateFailed: false,
};

async function refreshCache() {
  signale.pending('Updating pudeuko cache...');

  try {
    cache.list = await PudeukoClient.getPudeukoData();
    cache.lastUpdateFailed = false;

    signale.success('Updated pudeuko cache');
  } catch (exception) {
    cache.lastUpdateFailed = true;

    signale.fatal('Could not update pudeuko cache');
    signale.fatal(exception);
  }
}

function getPudeukoData() {
  return cache;
}

(function initializePudeukoModule() {
  setInterval(refreshCache, config().pudeuko.refresh_interval_seconds * 1000);
  setImmediate(refreshCache);
}());

export { getPudeukoData };

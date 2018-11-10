import signale from 'signale';
import config from '../application/config';

const cache = {
  list: [],
  lastUpdateFailed: false,
};

function refreshCache() {
  cache.list = config().countdowns.list;
  signale.success('Updated countdowns cache');
}

function getCountdownsData() {
  return cache;
}

(function initializeCountdownsModule() {
  setInterval(refreshCache, config().countdowns.refresh_interval_seconds * 1000);
  setImmediate(refreshCache);
}());

export { getCountdownsData };

import config from '../application/config';

const cache = {
  list: [],
  lastUpdateFailed: false,
};

function refreshCache() {
  cache.list = config().countdowns.list;
}

function getCountdowns() {
  return cache;
}

(function initializePudeukoModule() {
  setInterval(refreshCache, config().countdowns.refresh_interval_seconds * 1000);
  setImmediate(refreshCache);
}());

export { getCountdowns };

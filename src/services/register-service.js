import signale from 'signale';

function registerService({
  name,
  refreshInterval,
  dataProvider,
  initialData,
  getter,
}) {
  const loggerMessages = {
    onPending: `Updating ${name} cache...`,
    onSuccess: `Updated ${name} cache`,
    onError: `Could not update ${name} cache`,
  };

  const cache = {
    data: initialData,
    lastUpdateFailed: false,
  };

  const refreshCache = async () => {
    signale.pending(loggerMessages.onPending);

    try {
      cache.data = await dataProvider();

      cache.lastUpdateFailed = false;
      signale.success(loggerMessages.onSuccess);
    } catch (exception) {
      cache.lastUpdateFailed = true;

      signale.fatal(loggerMessages.onError);
      signale.fatal(exception);
    }
  };

  if (refreshInterval) {
    setInterval(refreshCache, refreshInterval * 1000);
  }
  setImmediate(refreshCache);

  return getter ? (() => getter(cache, refreshCache)) : (() => cache);
}

export default registerService;

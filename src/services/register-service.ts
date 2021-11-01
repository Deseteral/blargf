import signale from 'signale';

export interface DataCache<DataT> {
  data: DataT,
  lastUpdateFailed: boolean,
}

export type DataRefreshFunction = () => void;

export interface RegisterServiceOptions<DataT, ReturnDataT> {
  name: string,
  refreshInterval?: number,
  dataProvider: () => Promise<DataT>,
  initialData: DataT,
  getter: (cache: DataCache<DataT>, refreshCache: DataRefreshFunction) => ReturnDataT,
}

export type RegisterServiceReturnType<ReturnDataT> = [
  () => ReturnDataT,
  DataRefreshFunction,
]

function registerService<DataT, ReturnDataT>({ name, refreshInterval, dataProvider, initialData, getter }: RegisterServiceOptions<DataT, ReturnDataT>): RegisterServiceReturnType<ReturnDataT> {
  const loggerMessages = {
    onPending: `Updating ${name} cache...`,
    onSuccess: `Updated ${name} cache`,
    onError: `Could not update ${name} cache`,
  };

  const cache: DataCache<DataT> = {
    data: initialData,
    lastUpdateFailed: false,
  };

  const refreshCache = async (): Promise<void> => {
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

  return [
    ((): ReturnDataT => getter(cache, refreshCache)),
    refreshCache,
  ];
}

export default registerService;

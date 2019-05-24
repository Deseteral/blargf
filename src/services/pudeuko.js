import registerService from './register-service';
import config from '../application/config';
import * as PudeukoClient from '../clients/pudeuko-client';

const getPudeukoData = registerService({
  refreshInterval: config().pudeuko.refresh_interval_seconds,
  loggerMessages: {
    onPending: 'Updating pudeuko cache...',
    onSuccess: 'Updated pudeuko cache',
    onError: 'Could not update pudeuko cache',
  },
  dataProvider: async () => PudeukoClient.getPudeukoData(),
  initialData: [],
  fieldName: 'list',
});

export { getPudeukoData };

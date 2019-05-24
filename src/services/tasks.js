import registerService from './register-service';
import config from '../application/config';
import * as TodoistClient from '../clients/todoist-client';

const getTasks = registerService({
  refreshInterval: config().tasks.refresh_interval_seconds,
  loggerMessages: {
    onPending: 'Updating tasks cache...',
    onSuccess: 'Updated tasks cache',
    onError: 'Could not update tasks cache',
  },
  dataProvider: async () => TodoistClient.getTasksDueToday(),
  initialData: [],
  fieldName: 'list',
});

export { getTasks };

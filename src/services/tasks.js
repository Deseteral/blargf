import fetch from 'node-fetch';
import registerService from './register-service';
import config from '../application/config';

const TASKS_URL = 'https://beta.todoist.com/API/v8/tasks';

async function fetchTasksDueToday() {
  const currentDate = new Date().toISOString().split('T')[0];
  const token = config().tasks.todoist_token;
  const fetchOptions = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const tasks = await (await fetch(TASKS_URL, fetchOptions)).json();
  return tasks.filter(task => task.due && task.due.date === currentDate);
}

const getTasks = registerService({
  refreshInterval: config().tasks.refresh_interval_seconds,
  loggerMessages: {
    onPending: 'Updating tasks cache...',
    onSuccess: 'Updated tasks cache',
    onError: 'Could not update tasks cache',
  },
  dataProvider: fetchTasksDueToday,
  initialData: [],
  fieldName: 'list',
});

export { getTasks };

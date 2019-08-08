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

  const todaysTasks = tasks.filter(task => task.due && task.due.date === currentDate);
  const overdueTasks = tasks
    .filter(task => task.due && new Date(task.due.date).getTime() <= new Date().getTime())
    .filter(task => !todaysTasks.map(t => t.id).includes(task.id));

  return {
    today: todaysTasks,
    overdue: overdueTasks,
  };
}

const [getTasks] = registerService({
  name: 'tasks',
  refreshInterval: config().tasks.refresh_interval_seconds,
  dataProvider: fetchTasksDueToday,
  initialData: { today: [], overdue: [] },
});

export { getTasks };

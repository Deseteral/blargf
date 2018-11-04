import fetch from 'node-fetch';
import config from '../application/config';

const TASKS_URL = 'https://beta.todoist.com/API/v8/tasks';

const token = config().tasks.todoist_token;
const fetchOptions = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

async function getTasksDueToday() {
  const currentDate = new Date().toISOString().split('T')[0];

  const tasks = await (await fetch(TASKS_URL, fetchOptions)).json();
  return tasks.filter(task => task.due && task.due.date === currentDate);
}

export { getTasksDueToday };

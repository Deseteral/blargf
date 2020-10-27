import fetch from 'node-fetch';
import path from 'path';
import { exec } from 'child_process';
import registerService from './register-service';
import config from '../application/config';

async function fetchTodoistTasksDueToday() { // eslint-disable-line no-unused-vars
  const TASKS_URL = 'https://api.todoist.com/rest/v1/tasks';

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

function execAppleScript(scriptPath) {
  return new Promise((resolve, reject) => {
    exec(`osascript ${scriptPath}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stderr);
    });
  });
}

async function readTodayTasksFromThings() {
  const scriptPath = path.join(__dirname, '../scripts/read_today_tasks.applescript');
  const stdout = await execAppleScript(scriptPath);

  const today = stdout
    .split('\n')
    .filter(s => (s.length > 0))
    .map(s => ({ content: s }));

  return {
    today,
    overdue: [],
  };
}

const [getTasks] = registerService({
  name: 'tasks',
  refreshInterval: config().tasks.refresh_interval_seconds,
  dataProvider: readTodayTasksFromThings,
  initialData: { today: [], overdue: [] },
});

export { getTasks };

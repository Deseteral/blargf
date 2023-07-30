import { exec } from 'child_process';
import { nanoid } from 'nanoid';
import registerService, { DataCache } from '../../services/register-service';
import config from '../../config';
import { TaskList, Task } from './model';
// @ts-ignore
import readTodayTasksScript from './read_today_tasks.applescript';

type TodoistResponse = TodoistTask[];

interface TodoistTask {
  id: string,
  content: string,
  due?: {
    date: string,
  },
}

async function fetchTodoistTasksDueToday(): Promise<TaskList> {
  const TASKS_URL = 'https://api.todoist.com/rest/v2/tasks';

  const currentDate = new Date().toISOString().split('T')[0];
  const token = config().tasks.todoistToken;
  const fetchOptions = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(TASKS_URL, fetchOptions);
  const tasks = await res.json() as TodoistResponse;

  const todaysTasks: Task[] = tasks
    .filter((task) => task.due && task.due.date === currentDate)
    .map((task) => ({ id: task.id, content: task.content }));

  // const overdueTasks = tasks
  //   .filter((task) => task.due && new Date(task.due.date).getTime() <= new Date().getTime())
  //   .filter((task) => !todaysTasks.map(t => t.id).includes(task.id));

  return {
    today: todaysTasks,
    // overdue: overdueTasks,
  };
}

function execAppleScript(scriptPath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(`osascript ${scriptPath}`, (error, _stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stderr);
    });
  });
}

// @ts-ignore
async function readTodayTasksFromThings(): Promise<TaskList> { // eslint-disable-line no-unused-vars
  const scriptPath = new URL(readTodayTasksScript).pathname;
  const stdout = await execAppleScript(scriptPath);

  const today = stdout
    .split('\n')
    .filter((s) => (s.length > 0))
    .map((s) => ({
      id: nanoid(),
      content: s,
    }));

  return {
    today,
  };
}

const [getTasks] = registerService<TaskList, DataCache<TaskList>>({
  name: 'tasks',
  refreshInterval: config().tasks.refreshIntervalSeconds,
  dataProvider: fetchTodoistTasksDueToday,
  initialData: { today: [] },
  getter: (cache, _refreshCache) => cache,
});

export { getTasks };

import { exec } from 'child_process';
import registerService, { DataCache } from '../services/register-service';
import config from '../application/config';
import { TaskList } from './model';
// @ts-ignore
import readTodayTasksScript from './read_today_tasks.applescript';

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

async function readTodayTasksFromThings(): Promise<TaskList> {
  const scriptPath = new URL(readTodayTasksScript).pathname;
  const stdout = await execAppleScript(scriptPath);

  const today = stdout
    .split('\n')
    .filter((s) => (s.length > 0))
    .map((s) => ({ content: s }));

  return {
    today,
  };
}

const [getTasks] = registerService<TaskList, DataCache<TaskList>>({
  name: 'tasks',
  refreshInterval: config().tasks.refresh_interval_seconds,
  dataProvider: readTodayTasksFromThings,
  initialData: { today: [] },
  getter: (cache, _refreshCache) => cache,
});

export { getTasks };

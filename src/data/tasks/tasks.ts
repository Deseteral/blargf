import registerService, { type DataCache } from "../register-service";
import config from "../../config";
import { type TaskList, type Task } from "./model";

type TodoistResponse = TodoistTask[];

interface TodoistTask {
  id: string;
  content: string;
  due?: {
    date: string;
  };
}

async function fetchTodoistTasksDueToday(): Promise<TaskList> {
  const TASKS_URL = "https://api.todoist.com/rest/v2/tasks";

  const currentDate = new Date().toISOString().split("T")[0];
  const token = config().tasks.todoistToken;
  const fetchOptions = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(TASKS_URL, fetchOptions);
  const tasks = (await res.json()) as TodoistResponse;

  const todaysTasks: Task[] = tasks
    .filter((task) => task.due && task.due.date === currentDate)
    .map((task) => ({ id: task.id, content: task.content }));

  const overdueTasks = tasks
    .filter((task) => task.due && new Date(task.due.date).getTime() <= new Date().getTime())
    .filter((task) => !todaysTasks.map((t) => t.id).includes(task.id));

  return {
    today: todaysTasks,
    overdue: overdueTasks,
  };
}

const [getTasks] = registerService<TaskList, DataCache<TaskList>>({
  name: "tasks",
  refreshInterval: config().tasks.refreshIntervalSeconds,
  dataProvider: fetchTodoistTasksDueToday,
  initialData: { today: [], overdue: [] },
  getter: (cache) => cache,
});

export { getTasks };

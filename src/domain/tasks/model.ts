export interface Task {
  id: string,
  content: string
}

export interface TaskList {
  today: Task[],
}

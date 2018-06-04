const getTasksDueToday = require('./services/todoist');

async function getTasks() {
  const tasks = await getTasksDueToday();
  return {
    tasks: tasks.map(t => ({ name: t.content })),
  };
}

module.exports = getTasks;

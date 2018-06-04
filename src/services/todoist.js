const fetch = require('node-fetch');
const signale = require('signale');

const TASKS_URL = 'https://beta.todoist.com/API/v8/tasks';
const { TODOIST_TOKEN } = process.env;

const fetchOptions = {
  headers: {
    Authorization: `Bearer ${TODOIST_TOKEN}`,
  },
};

async function getTasksDueToday() {
  const currentDate = new Date().toISOString().split('T')[0];

  try {
    const tasks = await (await fetch(TASKS_URL, fetchOptions)).json();
    return tasks.filter(task => task.due && task.due.date === currentDate);
  } catch (exception) {
    signale.error(exception);
  }

  return [];
}

module.exports = { getTasksDueToday };

const signale = require('signale');
const Todoist = require('../services/todoist');

let cache = [];

const { TASKS_REFRESH_INTERVAL_SEC } = process.env;

async function refreshCache() {
  signale.pending('Updating tasks cache...');

  try {
    cache = await Todoist.getTasksDueToday();
  } catch (exception) {
    signale.fatal('Could not update task cache');
    signale.fatal(exception);
    return;
  }

  signale.success('Updated tasks cache');
}

function getTasks() {
  return cache;
}

(function initializeTasksModule() {
  signale.info(`TASKS_REFRESH_INTERVAL_SEC=${TASKS_REFRESH_INTERVAL_SEC}`);

  setInterval(refreshCache, TASKS_REFRESH_INTERVAL_SEC * 1000);
  setImmediate(refreshCache);
}());

module.exports = getTasks;

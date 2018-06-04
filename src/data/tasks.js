const signale = require('signale');
const Todoist = require('../services/todoist');

let cache = [];

const { TASKS_REFRESH_INTERVAL_MINS } = process.env;

async function refreshCache() {
  signale.pending('Updating tasks cache...');
  cache = await Todoist.getTasksDueToday();
  signale.success('Updated tasks cache');
}

function getTasks() {
  return cache;
}

(function initializeTasksModule() {
  signale.info(`TASKS_REFRESH_INTERVAL_MINS=${TASKS_REFRESH_INTERVAL_MINS}`);

  setInterval(refreshCache, TASKS_REFRESH_INTERVAL_MINS * 60 * 1000);
  setImmediate(refreshCache);
}());

module.exports = getTasks;

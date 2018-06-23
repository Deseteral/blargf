const signale = require('signale');
const Todoist = require('../services/todoist');

const cache = {
  list: [],
  lastUpdateFailed: false,
};

const { TASKS_REFRESH_INTERVAL_SEC } = process.env;

async function refreshCache() {
  signale.pending('Updating tasks cache...');

  try {
    cache.list = await Todoist.getTasksDueToday();
    cache.lastUpdateFailed = false;
  } catch (exception) {
    cache.lastUpdateFailed = true;

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

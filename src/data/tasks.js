import signale from 'signale';
import config from '../application/config';
import Todoist from '../services/todoist';

const cache = {
  list: [],
  lastUpdateFailed: false,
};

async function refreshCache() {
  signale.pending('Updating tasks cache...');

  try {
    cache.list = await Todoist.getTasksDueToday();
    cache.lastUpdateFailed = false;

    signale.success('Updated tasks cache');
  } catch (exception) {
    cache.lastUpdateFailed = true;

    signale.fatal('Could not update task cache');
    signale.fatal(exception);
  }
}

function getTasks() {
  return cache;
}

(function initializeTasksModule() {
  setInterval(refreshCache, config.tasks.refresh_interval_seconds * 1000);
  setImmediate(refreshCache);
}());

module.exports = getTasks;

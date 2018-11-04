import signale from 'signale';
import config from '../application/config';
import * as TodoistClient from '../clients/todoist-client';

const cache = {
  list: [],
  lastUpdateFailed: false,
};

async function refreshCache() {
  signale.pending('Updating tasks cache...');

  try {
    cache.list = await TodoistClient.getTasksDueToday();
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

export { getTasks };

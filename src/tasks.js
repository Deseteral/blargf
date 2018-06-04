const todaysTasksCache = [
  {
    name: 'Some test task'
  }, {
    name: 'Some other task'
  }, {
    name: 'Even better one'
  }
];

function getTodaysTasks() {
  return {
    tasks: todaysTasksCache
  };
}

module.exports = getTodaysTasks;

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
    todaysTasks: todaysTasksCache
  };
}

module.exports = getTodaysTasks;

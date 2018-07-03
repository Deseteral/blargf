const Duration = require('duration');

const startDate = new Date();

function processUptime() {
  const duration = new Duration(startDate, new Date());
  return duration.toString(1);
}

module.exports = processUptime;

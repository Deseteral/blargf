const fetch = require('node-fetch');

const { TODOIST_TOKEN } = process.env;

function getTasksDueToday() {
  return fetch('https://beta.todoist.com/API/v8/tasks', {
    headers: {
      Authorization: `Bearer ${TODOIST_TOKEN}`,
    },
  })
    .then(data => data.json())
    .then((tasks) => {
      const date = new Date().toISOString().split('T')[0];
      return tasks.filter(task => task.due && task.due.date === date);
    })
    .catch(console.error);
}

module.exports = getTasksDueToday;

const html = require('html-template-tag');
const getTasks = require('../data/tasks');
const { getFormattedDate, getFormattedTime } = require('../data/date-time');

function render() {
  const tasks = getTasks();

  return html`
    <!doctype html>
    <html>
    <head>
      <title>New tab</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400" rel="stylesheet">
      <link href="styles.css" rel="stylesheet">
    </head>
    <body class="hidden">
      <div class="background-image"></div>
      <h1 class="title">New tab</h1>
      <div class="container">
        <div class="grid-container">
          <div class="column">
            <section class="date-time-section card">
              <div class="time">${getFormattedTime()}</div>
              <div class="date">${getFormattedDate()}</div>
            </section>
          </div>
          <div class="column">
            <section class="card">
              <h1 class="card-header">Tasks</h1>
              <ul class="list">
                ${tasks.map(task => html`<li class="list-element">${task.content}</li>`)}
              </ul>
            </section>
          </div>
        </div>
      </div>
      <script src="code.js"></script>
    </body>
    </html>
  `;
}

module.exports = render;

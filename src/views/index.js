const html = require('html-template-tag');
const getTasks = require('../data/tasks');

function render() {
  const tasks = getTasks();

  return html`
    <!doctype html>
    <html>
    <head>
      <title>New tab</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">
      <link href="styles.css" rel="stylesheet">
    </head>
    <body>
      <h1 class="title">New tab</h1>
      <div class="container">
        <div class="column">
        </div>
        <div class="column">
          <section class="card tasks-section">
            <h2>Tasks</h2>
            <ul>
              ${tasks.map(task => html`<li>${task.content}</li>`)}
            </ul>
          </section>
        </div>
      </div>
    </body>
    </html>
  `;
}

module.exports = render;

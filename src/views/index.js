const backgroundImage = require('./background-image');
const dateTimeSection = require('./date-time-section');
const tasksSection = require('./tasks-section');
const eventsSection = require('./events-section');
const imageSourceButton = require('./tray/image-source-button');
const processUptime = require('./tray/process-uptime');

const getBackgroundImage = require('../data/reddit-images');
const getTasks = require('../data/tasks');
const getUpcomingEvents = require('../data/upcoming-events');

const LEFT_COLUMN = [
  dateTimeSection,
  eventsSection,
];

const RIGHT_COLUMN = [
  tasksSection,
];

function buildColumnMarkup(column, context) {
  return column.map(fn => fn(context)).join('\n');
}

function render() {
  const context = {
    imageData: getBackgroundImage(),
    tasks: getTasks(),
    upcomingEvents: getUpcomingEvents(),
  };

  return `
    <!doctype html>
    <html>
    <head>
      <title>New tab</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400|Crimson+Text:400i" rel="stylesheet">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link href="styles.css" rel="stylesheet">
      <base target="_parent">
    </head>
    <body class="hidden">
      ${backgroundImage(context)}
      <h1 class="title">New tab</h1>
      <div class="container">
        <div class="grid-container">
          <div class="column">
            ${buildColumnMarkup(LEFT_COLUMN, context)}
          </div>
          <div class="column">
            ${buildColumnMarkup(RIGHT_COLUMN, context)}
          </div>
        </div>
      </div>
      <div class="tray">
        <div class="caption">${processUptime()}</div>
        ${imageSourceButton(context)}
      </div>
      <script src="code.js"></script>
    </body>
    </html>
  `;
}

module.exports = render;

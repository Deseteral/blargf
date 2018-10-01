import React, { Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';
import BackgroundImage from '../components/BackgroundImage';
import DateTimeSection from '../components/DateTimeSection';
import EventsSection from '../components/EventsSection';
import TasksSection from '../components/TasksSection';


const getBackgroundImage = require('../data/reddit-images');
const getTasks = require('../data/tasks');
const getUpcomingEvents = require('../data/upcoming-events');

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
      ${ReactDOMServer.renderToStaticMarkup((
        <Fragment>
          <BackgroundImage imageData={context.imageData} />
          <h1 className="title">New tab</h1>
          <div className="container">
            <div className="grid-container">
              <div className="column">
                <DateTimeSection />
                <EventsSection upcomingEvents={context.upcomingEvents} />
              </div>
              <div className="column">
                <TasksSection tasks={context.tasks} />
              </div>
            </div>
          </div>
        </Fragment>
  ))}
      <script src="code.js"></script>
    </body>
    </html>
  `;
}

module.exports = render;

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import BackgroundImage from '../components/BackgroundImage';
import DateTimeSection from '../components/DateTimeSection';
import EventsSection from '../components/EventsSection';
import TasksSection from '../components/TasksSection';
import getBackgroundImage from '../data/reddit-images';
import getTasks from '../data/tasks';
import getUpcomingEvents from '../data/upcoming-events';

function render() {
  const context = {
    imageData: getBackgroundImage(),
    tasks: getTasks(),
    upcomingEvents: getUpcomingEvents(),
  };

  return ReactDOMServer.renderToStaticMarkup((
    <html lang="en">
      <head>
        <title>New tab</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400|Crimson+Text:400i" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="styles.css" rel="stylesheet" />
        <base target="_parent" />
      </head>
      <body className="hidden">
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
        <script src="code.js" />
      </body>
    </html>
  ));
}

module.exports = render;

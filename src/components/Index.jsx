import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import DateTimeSection from '../components/DateTimeSection';
import EventsSection from '../components/EventsSection';
import TasksSection from '../components/TasksSection';
import ImageSourceButton from '../components/ImageSourceButton';

function Index({ context }) {
  return (
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
        <div className="tray">
          <ImageSourceButton imageData={context.imageData} />
        </div>
        <script src="code.js" />
      </body>
    </html>
  );
}

export default Index;

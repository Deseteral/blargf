import React from 'react';
import { css, injectGlobal } from 'emotion';
import Column from '../components/atomic/Column';
import Tray from './atomic/Tray';
import BackgroundImage from '../components/BackgroundImage';
import DateTimeSection from '../components/DateTimeSection';
import EventsSection from '../components/EventsSection';
import TasksSection from '../components/TasksSection';
import TrayIconLink from './atomic/TrayIconLink';

function Index({ context }) {
  // eslint-disable-next-line no-unused-expressions
  injectGlobal`
    body {
      margin: 64px 16px 16px 16px;
      background-color: #03A9F4;
      font-family: 'Roboto', sans-serif;
      user-select: none;
    }
  `;

  const containerClassName = css`
    display: flex;
    justify-content: center;
  `;

  const gridContainerClassName = css`
    display: flex;
    max-width: 880px;
    width: 100%;
  `;

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
        <div className={containerClassName}>
          <div className={gridContainerClassName}>
            <Column>
              <DateTimeSection />
              <EventsSection upcomingEvents={context.upcomingEvents} />
            </Column>
            <Column>
              <TasksSection tasks={context.tasks} />
            </Column>
          </div>
        </div>
        <Tray>
          <TrayIconLink href={context.imageData.link} icon="photo_camera" />
        </Tray>
        <script src="code.js" />
      </body>
    </html>
  );
}

export default Index;

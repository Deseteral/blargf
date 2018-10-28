import React from 'react';
import Tray from './atomic/Tray';
import TrayIconLink from './atomic/TrayIconLink';
import ApplicationWrapper from './ApplicationWrapper';
import Column from './Column';
import ColumnWrapper from './ColumnWrapper';
import BackgroundImage from './BackgroundImage';
import DateTimeSection from './DateTimeSection';
import EventsSection from './EventsSection';
import TasksSection from './TasksSection';

function Index({ context }) {
  return (
    <ApplicationWrapper title="New Tab">
      <BackgroundImage imageData={context.imageData} />
      <ColumnWrapper>
        <Column>
          <DateTimeSection />
          <EventsSection upcomingEvents={context.upcomingEvents} />
        </Column>
        <Column>
          <TasksSection tasks={context.tasks} />
        </Column>
      </ColumnWrapper>
      <Tray>
        <TrayIconLink href={context.imageData.link} icon="photo_camera" />
      </Tray>
    </ApplicationWrapper>
  );
}

export default Index;

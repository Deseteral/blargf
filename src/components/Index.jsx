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
import PudeukoSection from './PudeukoSection';
import CountdownsSection from './CountdownsSection';

function Index({ data }) {
  return (
    <ApplicationWrapper title="New Tab">
      <BackgroundImage imageData={data.imageData} />
      <ColumnWrapper>
        <Column>
          <DateTimeSection />
          <EventsSection upcomingEvents={data.upcomingEvents} />
        </Column>
        <Column>
          <TasksSection tasks={data.tasks} />
          <PudeukoSection data={data.pudeuko} />
          <CountdownsSection data={data.countdowns} />
        </Column>
      </ColumnWrapper>
      <Tray>
        <TrayIconLink href={data.imageData.link} icon="photo_camera" />
      </Tray>
    </ApplicationWrapper>
  );
}

export default Index;

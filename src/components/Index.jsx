import React from 'react';
import SnackbarContainer from './SnackbarContainer';
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
import AlertBannerSection from './AlertBannerSection';
import { StoreProvider } from './Store';

function Index({ imageData, upcomingEvents, tasks, pudeuko, countdowns, alertBanner }) {
  return (
    <StoreProvider>
      <ApplicationWrapper title="New Tab">
        <BackgroundImage imageData={imageData} />
        <ColumnWrapper>
          <Column>
            <DateTimeSection />
            <EventsSection upcomingEvents={upcomingEvents} />
            <PudeukoSection pudeuko={pudeuko} />
          </Column>
          <Column>
            <AlertBannerSection alertBanner={alertBanner} />
            <TasksSection tasks={tasks} />
            <CountdownsSection countdowns={countdowns} />
          </Column>
        </ColumnWrapper>
        <Tray>
          <TrayIconLink href={imageData.link} icon="photo_camera" />
        </Tray>
        <SnackbarContainer />
      </ApplicationWrapper>
    </StoreProvider>
  );
}

export default Index;

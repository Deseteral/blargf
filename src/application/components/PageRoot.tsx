import React from 'react';
import { BackgroundImageData } from '../../background/model';
import Tray from '../../components/Tray';
import TrayIconLink from '../../components/TrayIconLink';
import ApplicationWrapper from './ApplicationWrapper';
import Column from '../../components/Column';
import ColumnWrapper from './ColumnWrapper';
import BackgroundImage from '../../background/BackgroundImage';
import DateTimeSection from '../../clock/DateTimeSection';
import EventsSection from '../../calendar-events/EventsSection';
import TasksSection from '../../tasks/TasksSection';
import { DataCache } from '../../services/register-service';
import { TaskList } from '../../tasks/model';
import PudeukoSection from '../../pudeuko/PudeukoSection';
import { Pudeuko } from '../../pudeuko/model';
import { AlertBannerContent } from '../../alert-banner/model';
import CountdownsSection from '../../countdowns/CountdownsSection';
import AlertBannerSection from '../../alert-banner/AlertBannerSection';
import { EventListViewModel } from '../../calendar-events/model';
import { Countdown } from '../../countdowns/model';

export interface PageRootProps {
  imageData: BackgroundImageData,
  tasks: DataCache<TaskList>,
  pudeuko: DataCache<Pudeuko>,
  alertBanner: AlertBannerContent,
  upcomingEvents: DataCache<EventListViewModel>,
  countdowns: Countdown[],
}

function PageRoot({ imageData, upcomingEvents, tasks, pudeuko, countdowns, alertBanner }: PageRootProps): JSX.Element {
  return (
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
    </ApplicationWrapper>
  );
}

export default PageRoot;

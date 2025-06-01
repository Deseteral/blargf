import React from "react";
import Tray from "../components/Tray";
import TrayIconLink from "../components/TrayIconLink";
import ApplicationWrapper from "./ApplicationWrapper";
import Column from "../components/Column";
import ColumnWrapper from "./ColumnWrapper";
import BackgroundImage from "../background/BackgroundImage";
import DateTimeSection from "../clock/DateTimeSection";
import EventsSection from "../calendar-events/EventsSection";
import TasksSection from "../tasks/TasksSection";
import CountdownsSection from "../countdowns/CountdownsSection";
import { BlargfData } from "../../../data/data-service";

export interface PageRootProps {
  data: BlargfData;
}

function PageRoot({ data }: PageRootProps): JSX.Element {
  const { imageData, upcomingEvents, tasks, countdowns } = data;

  return (
    <ApplicationWrapper title="New Tab">
      <BackgroundImage imageData={imageData} />
      <ColumnWrapper>
        <Column>
          <DateTimeSection />
          <EventsSection upcomingEvents={upcomingEvents} />
          <CountdownsSection countdowns={countdowns} />
        </Column>
        <Column>
          <TasksSection tasks={tasks} />
        </Column>
      </ColumnWrapper>
      <Tray>
        <TrayIconLink href={imageData.link} icon="photo_camera" />
      </Tray>
    </ApplicationWrapper>
  );
}

export default PageRoot;

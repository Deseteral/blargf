import { getBackgroundImage } from "../domain/background/reddit-images";
import { getTasks } from "../domain/tasks/tasks";
import { getUpcomingEvents } from "../domain/calendar-events/upcoming-events";
import { getCountdownsData } from "../domain/countdowns/countdowns";
import { getAlertBannerData } from "../domain/alert-banner/alert-banner";
import { BackgroundImageData } from "../domain/background/model";
import { TaskList } from "../domain/tasks/model";
import { DataCache } from "./register-service";
import { AlertBannerContent } from "../domain/alert-banner/model";
import { Countdown } from "../domain/countdowns/model";
import { EventGroup } from "../domain/calendar-events/model";

export interface BlargfData {
  imageData: BackgroundImageData;
  tasks: DataCache<TaskList>;
  alertBanner: AlertBannerContent;
  upcomingEvents: DataCache<EventGroup[]>;
  countdowns: Countdown[];
}

function getData(): BlargfData {
  return {
    imageData: getBackgroundImage(),
    tasks: getTasks(),
    upcomingEvents: getUpcomingEvents(),
    countdowns: getCountdownsData(),
    alertBanner: getAlertBannerData(),
  };
}

export default getData;

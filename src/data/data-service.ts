import { getBackgroundImage } from "./background/reddit-images";
import { getTasks } from "./tasks/tasks";
import { getUpcomingEvents } from "./calendar-events/upcoming-events";
import { getCountdownsData } from "./countdowns/countdowns";
import { type BackgroundImageData } from "./background/model";
import { type TaskList } from "./tasks/model";
import { type DataCache } from "./register-service";
import { type Countdown } from "./countdowns/model";
import { type EventGroup } from "./calendar-events/model";

export interface BlargfData {
  imageData: BackgroundImageData;
  tasks: DataCache<TaskList>;
  upcomingEvents: DataCache<EventGroup[]>;
  countdowns: Countdown[];
}

function getData(): BlargfData {
  return {
    imageData: getBackgroundImage(),
    tasks: getTasks(),
    upcomingEvents: getUpcomingEvents(),
    countdowns: getCountdownsData(),
  };
}

export default getData;

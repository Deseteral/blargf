import { getBackgroundImage } from "./background/reddit-images";
import { getTasks } from "./tasks/tasks";
import { getUpcomingEvents } from "./calendar-events/upcoming-events";
import { getCountdownsData } from "./countdowns/countdowns";
import { BackgroundImageData } from "./background/model";
import { TaskList } from "./tasks/model";
import { DataCache } from "./register-service";
import { Countdown } from "./countdowns/model";
import { EventGroup } from "./calendar-events/model";

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

import { getBackgroundImage } from "../data/background/reddit-images";
import { getTasks } from "../data/tasks/tasks";
import { getUpcomingEvents } from "../data/calendar-events/upcoming-events";
import { getCountdownsData } from "../data/countdowns/countdowns";
import { BackgroundImageData } from "../data/background/model";
import { TaskList } from "../data/tasks/model";
import { DataCache } from "./register-service";
import { Countdown } from "../data/countdowns/model";
import { EventGroup } from "../data/calendar-events/model";

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

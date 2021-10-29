import { getBackgroundImage } from '../../background/reddit-images';
import { getTasks } from '../../tasks/tasks';
import { getUpcomingEvents } from '../../calendar-events/upcoming-events';
import { getPudeukoData } from '../../pudeuko/pudeuko';
import { getCountdownsData } from '../../countdowns/countdowns';
import { getAlertBannerData } from '../../alert-banner/alert-banner';
import { BackgroundImageData } from '../../background/model';
import { TaskList } from '../../tasks/model';
import { DataCache } from './register-service';
import { Pudeuko } from '../../pudeuko/model';
import { AlertBannerContent } from '../../alert-banner/model';
import { EventListViewModel } from '../../calendar-events/model';
import { Countdown } from '../../countdowns/model';

export interface BlargfData {
  imageData: BackgroundImageData,
  tasks: DataCache<TaskList>,
  pudeuko: DataCache<Pudeuko>,
  alertBanner: AlertBannerContent,
  upcomingEvents: DataCache<EventListViewModel>,
  countdowns: Countdown[],
}

function getData(): BlargfData {
  return {
    imageData: getBackgroundImage(),
    tasks: getTasks(),
    upcomingEvents: getUpcomingEvents(),
    pudeuko: getPudeukoData(),
    countdowns: getCountdownsData(),
    alertBanner: getAlertBannerData(),
  };
}

export default getData;

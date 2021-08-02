import { getBackgroundImage } from './reddit-images';
import { getTasks } from './tasks';
import { getUpcomingEvents } from './upcoming-events';
import { getPudeukoData } from './pudeuko';
import { getCountdownsData } from './countdowns';
import { getAlertBannerData } from './alert-banner';

function getData() {
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

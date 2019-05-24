import { getBackgroundImage } from '../services/reddit-images';
import { getTasks } from '../services/tasks';
import { getUpcomingEvents } from '../services/upcoming-events';
import { getPudeukoData } from '../services/pudeuko';
import { getCountdownsData } from '../services/countdowns';

function dataController(req, res) {
  const data = {
    imageData: getBackgroundImage(),
    tasks: getTasks(),
    upcomingEvents: getUpcomingEvents(),
    pudeuko: getPudeukoData(),
    countdowns: getCountdownsData(),
  };

  res.send(data);
}

export default dataController;

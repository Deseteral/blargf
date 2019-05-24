import ical from 'node-ical';
import config from '../application/config';

function fetchICalFromUrl(url) {
  return new Promise((resolve, reject) => {
    ical.fromURL(url, {}, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const events = Object.keys(data)
        .map(key => data[key])
        .filter(event => !!event.summary);

      resolve(events);
    });
  });
}

async function fetchEvents() {
  const iCalSourceUrls = config().events.ical_urls;
  return (await Promise.all(iCalSourceUrls.map(fetchICalFromUrl))).flat();
}

export { fetchEvents };

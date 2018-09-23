const ical = require('node-ical');
const flatten = require('array-flatten');

const ICAL_SOURCE_URLS = JSON.parse(process.env.EVENTS_ICAL_URLS);

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

async function fetchICalEvents() {
  return flatten(await Promise.all(ICAL_SOURCE_URLS.map(fetchICalFromUrl)));
}

module.exports = { fetchICalEvents };

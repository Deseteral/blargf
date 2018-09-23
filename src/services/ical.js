const ical = require('node-ical');
const flatten = require('array-flatten');

function getUrlsFromConfiguration() {
  return JSON.parse(process.env.EVENTS_ICAL_URLS);
}

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
  const urls = getUrlsFromConfiguration();

  return flatten(await Promise.all(urls.map(fetchICalFromUrl)));
}

module.exports = { fetchICalEvents };
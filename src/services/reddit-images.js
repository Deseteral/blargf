import signale from 'signale';
import fetch from 'node-fetch';
import shuffle from 'shuffle-array';
import config from '../application/config';

let cache = [];

function mapListingData(listing) {
  return listing.data.children
    .map(child => ({
      imageUrl: child.data.url,
      link: `https://reddit.com${child.data.permalink}`,
    }))
    .filter(image => !!image.imageUrl)
    .filter(image => image.imageUrl.endsWith('.jpg') || image.imageUrl.endsWith('.jpeg'));
}

async function refreshCache() {
  signale.pending('Updating reddit image cache...');

  const urls = config.backgrounds.subreddits
    .map(subreddit => `https://www.reddit.com/r/${subreddit}.json`);

  Promise
    .all(urls.map(fetch))
    .then(res => Promise.all(res.map(data => data.json())))
    .then(listings => listings.map(mapListingData))
    .then(nestedImages => nestedImages.reduce((acc, val) => acc.concat(val), []))
    .then(images => shuffle(images))
    .then((images) => {
      cache = images;
      signale.success('Updated reddit image cache');
    });
}

function getBackgroundImage() {
  const image = cache.pop();
  if (cache.length === 0) refreshCache();
  return image;
}

(function initializeRedditImagesModule() {
  setImmediate(refreshCache);
}());

module.exports = getBackgroundImage;

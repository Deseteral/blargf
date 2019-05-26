import fetch from 'node-fetch';
import shuffle from 'shuffle-array';
import registerService from './register-service';
import config from '../application/config';

function mapListingData(listing) {
  return listing.data.children
    .map(child => ({
      imageUrl: child.data.url,
      link: `https://reddit.com${child.data.permalink}`,
    }))
    .filter(image => !!image.imageUrl)
    .filter(image => image.imageUrl.endsWith('.jpg') || image.imageUrl.endsWith('.jpeg'));
}

async function dataProvider() {
  const urls = config().backgrounds.subreddits
    .map(subreddit => `https://www.reddit.com/r/${subreddit}.json`);

  return Promise.all(urls.map(fetch))
    .then(res => Promise.all(res.map(data => data.json())))
    .then(listings => listings.map(mapListingData))
    .then(nestedImages => nestedImages.reduce((acc, val) => acc.concat(val), []))
    .then(images => shuffle(images));
}

const getBackgroundImage = registerService({
  name: 'reddit images',
  dataProvider,
  initialData: [],
  getter: (cache, refresh) => {
    const image = cache.data.pop();
    if (cache.data.length === 0) refresh();
    return image;
  },
});

export { getBackgroundImage };

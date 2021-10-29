import fetch from 'node-fetch';
import shuffle from 'shuffle-array';
import registerService from '../services/register-service';
import config from '../application/config';
import { BackgroundImageData } from './model';

interface RedditListing {
  data: {
    children: [
      {
        data: {
          url: string,
          permalink: string,
        }
      }
    ]
  }
}

function mapListingData(listing: RedditListing): BackgroundImageData[] {
  return listing.data.children
    .map((child) => ({
      imageUrl: child.data.url,
      link: `https://reddit.com${child.data.permalink}`,
    }))
    .filter((image) => !!image.imageUrl)
    .filter((image) => image.imageUrl.endsWith('.jpg') || image.imageUrl.endsWith('.jpeg'));
}

async function dataProvider(): Promise<BackgroundImageData[]> {
  const urls = config().backgrounds.subreddits
    .map((subreddit) => `https://www.reddit.com/r/${subreddit}.json`);

  return Promise.all(urls.map((url) => fetch(url)))
    .then((responses) => responses.filter((response) => response.status === 200))
    .then((responses) => Promise.all(responses.map((response) => response.json())))
    .then((listings) => listings.map((listing) => mapListingData(listing as RedditListing)))
    .then((nestedImages) => nestedImages.reduce((acc, val) => acc.concat(val), []))
    .then((images) => shuffle(images));
}

const [getBackgroundImage] = registerService<BackgroundImageData[], BackgroundImageData>({
  name: 'reddit images',
  dataProvider,
  initialData: [],
  getter: (cache, refreshCache) => {
    const image = cache.data.pop() as BackgroundImageData; // TODO: Do an acutal check of cache size
    if (cache.data.length === 0) refreshCache();
    return image;
  },
});

export { getBackgroundImage };

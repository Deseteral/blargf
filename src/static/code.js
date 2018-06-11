const timeElement = document.querySelector('.time');

function updateTime() {
  const date = new Date();
  const formatedTime = date.toTimeString().slice(0, 5);
  timeElement.textContent = formatedTime;
}

function unhide() {
  document.body.classList.remove('hidden');
}

function randomArrayElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function preloadImage(imageUrl) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.src = imageUrl;
  });
}

// TODO: Move this to server-side, cache it
async function redditBackgroundImage() {
  const subreddit = randomArrayElement(['SkyPorn', 'EarthPorn', 'ExposurePorn']); // TODO: Make this be a part of configuration
  const url = `https://www.reddit.com/r/${subreddit}.json`;
  const data = await (await fetch(url)).json();
  const imageUrls = data.data.children
    .map(child => child.data.url)
    .filter(u => !!u)
    .filter(u => u.endsWith('.jpg') || u.endsWith('.jpeg'));
  const imageUrl = randomArrayElement(imageUrls);

  if (imageUrl) {
    await preloadImage(imageUrl);

    const element = document.querySelector('.background-image');
    element.style.backgroundImage = `url("${imageUrl}")`;
    element.classList.add('show');
  }
}

window.addEventListener('load', () => {
  setInterval(updateTime, 1000);
  unhide();
  redditBackgroundImage();
});

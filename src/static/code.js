import updateClock from './update-clock';
import updateCountdowns from './update-countdowns';
import preloadImage from './preload-image';

function unhide() {
  document.body.classList.remove('hidden');
}

async function setBackgroundImage() {
  const { backgroundImage: { imageUrl } } = window;

  if (imageUrl) {
    await preloadImage(imageUrl);

    const element = document.querySelector('#background-image');
    element.style.backgroundImage = `url("${imageUrl}")`;
    element.classList.add('show');
  }
}

window.addEventListener('load', () => {
  setInterval(updateClock, 1000);
  setInterval(updateCountdowns, 1000);
  unhide();
  setBackgroundImage();
});

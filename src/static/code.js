const timeElement = document.querySelector('#time');
const countdownElements = [...document.querySelectorAll('[data-countdown]')];

function updateTime() {
  const date = new Date();
  const formatedTime = date.toTimeString().slice(0, 5);
  timeElement.textContent = formatedTime;
}

function unhide() {
  document.body.classList.remove('hidden');
}

function preloadImage(imageUrl) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.src = imageUrl;
  });
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

function updateCountdowns() {
  const calculateDuration = date => +date - Date.now();
  const formatDuration = duration => `blath ${duration}`;

  countdownElements.forEach((el) => {
    const date = new Date(el.dataset.countdownDate);
    const duration = calculateDuration(date);
    el.textContent = formatDuration(duration); // eslint-disable-line no-param-reassign
  });
}

window.addEventListener('load', () => {
  setInterval(updateTime, 1000);
  setInterval(updateCountdowns, 1000);
  unhide();
  setBackgroundImage();
});

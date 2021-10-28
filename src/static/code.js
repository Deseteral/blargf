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

async function render() {
  const hydrate = (await import('./hydrate')).default;
  hydrate();
}

window.addEventListener('load', () => {
  unhide();
  setBackgroundImage();
  render();
});

function unhide(): void {
  document.body.classList.remove('hidden');
}

function preloadImage(imageUrl: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = (): void => resolve();
    img.src = imageUrl;
  });
}

async function setBackgroundImage(): Promise<void> {
  const { backgroundImage: { imageUrl } } = window;

  if (imageUrl) {
    await preloadImage(imageUrl);

    const element = document.querySelector('#background-image') as HTMLElement;
    element.style.backgroundImage = `url("${imageUrl}")`;
    element.classList.add('show');
  }
}

async function render(): Promise<void> {
  const hydrate = (await import('./hydrate')).default;
  hydrate();
}

window.addEventListener('DOMContentLoaded', () => {
  unhide();
  setBackgroundImage();
  render();
});

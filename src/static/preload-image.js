function preloadImage(imageUrl) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.src = imageUrl;
  });
}

export default preloadImage;

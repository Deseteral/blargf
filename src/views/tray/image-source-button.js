function imageSourceButton(context) {
  return `
    <a class="tray-icon" href="${context.imageData.link}">
      <i class="material-icons">photo_camera</i>
    </a>
  `;
}

module.exports = imageSourceButton;

function backgroundImage(context) {
  return `
    <div class="background-image"></div>
    <script>window.backgroundImage=${JSON.stringify(context.imageData)}</script>
  `;
}

module.exports = backgroundImage;

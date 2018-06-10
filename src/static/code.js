const timeElement = document.querySelector('.time');

function updateTime() {
  const date = new Date();
  const formatedTime = date.toTimeString().slice(0, 5);
  timeElement.textContent = formatedTime;
}

function unhide() {
  document.body.classList.remove('hidden');
}

window.addEventListener('load', () => {
  setInterval(updateTime, 1000);
  unhide();
});
// (function main() {
//   setInterval(updateTime, 1000);
//   unhide();
// }());

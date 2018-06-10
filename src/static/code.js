const timeElement = document.querySelector('.time');

function updateTime() {
  const date = new Date();
  const formatedTime = date.toTimeString().slice(0, 5);
  timeElement.textContent = formatedTime;
}

(function main() {
  setInterval(updateTime, 1000);
}());

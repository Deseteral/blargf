const timeElement = document.querySelector('#time');

function updateClock() {
  const date = new Date();
  const formatedTime = date.toTimeString().slice(0, 5);
  timeElement.textContent = formatedTime;
}

export default updateClock;

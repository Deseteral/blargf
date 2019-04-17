import formatAsDuration from '../helpers/format-as-duration';

const countdownElements = [...document.querySelectorAll('[data-countdown]')];

function updateCountdowns() {
  countdownElements.forEach((el) => {
    const date = new Date(el.dataset.countdownDate);
    el.textContent = formatAsDuration(date); // eslint-disable-line no-param-reassign
  });
}

export default updateCountdowns;

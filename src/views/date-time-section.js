const { getFormattedDate, getFormattedTime } = require('../data/date-time');

function dateTimeSection() {
  return `
    <section class="date-time-section card">
      <div class="time">${getFormattedTime()}</div>
      <div class="date">${getFormattedDate()}</div>
    </section>
  `;
}

module.exports = dateTimeSection;

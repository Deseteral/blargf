const FAILED_UPDATE_MARKUP = `
<div class="caption caption--small caption--error">
  List might be outdated because of failed update.
</div>
`;

function renderEventsList(eventList) {
  return `
    <ul class="events-list">
    ${eventList.map(e => `
      <li class="events-list-element">
        <div>${e.title}</div>
        <div class="caption">${e.date}</div>
      </li>
    `).join('\n')}
    </ul>
  `;
}

function renderEventSection(eventSection) {
  if (eventSection.eventList.length === 0) return '';

  return `
    <div class="events-subsection">
      <h2>${eventSection.name}</h2>
      ${renderEventsList(eventSection.eventList)}
    </div>
  `;
}

function dateTimeSection(context) {
  const { events, lastUpdateFailed } = context.upcomingEvents;

  return `
    <section class="card">
      <h1>Upcoming events</h1>
      ${events.map(renderEventSection).join('\n')}
      ${lastUpdateFailed ? FAILED_UPDATE_MARKUP : ''}
      <p class="caption">
        Plan your events in <a href="https://calendar.google.com/calendar/">Google Calendar</a>.
      </p>
    </section>
  `;
}

module.exports = dateTimeSection;

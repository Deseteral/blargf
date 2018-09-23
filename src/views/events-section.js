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
  const { events } = context.upcomingEvents;

  return `
    <section class="card">
      <h1>Upcoming events</h1>
      ${events.map(renderEventSection).join('\n')}
    </section>
  `;
}

module.exports = dateTimeSection;

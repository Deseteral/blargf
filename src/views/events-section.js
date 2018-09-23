function renderEventsList(eventList) {
  return `
    <ul class="events-list">
    ${!eventList.length ? `
      <li class="events-list-element">
        <div class="caption">No events.</div>
      </li>
    ` : ''}
    ${(eventList.length > 0) ? eventList.map(e => `
      <li class="events-list-element">
        <div>${e.title}</div>
        <div class="caption">${e.date}</div>
      </li>
    `).join('\n') : ''}
    </ul>
  `;
}

function dateTimeSection(context) {
  const { events } = context.upcomingEvents;

  return `
    <section class="card">
      <h1>Upcoming events</h1>
      ${events.map(eventSection => `
        <div class="events-subsection">
          <h2>${eventSection.name}</h2>
          ${renderEventsList(eventSection.eventList)}
        </div>
      `).join('\n')}
    </section>
  `;
}

module.exports = dateTimeSection;

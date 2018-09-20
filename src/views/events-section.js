function dateTimeSection() {
  return `
    <section class="card">
      <h1>Upcoming events</h1>

      <div class="events-subsection">
        <h2>Today</h2>
        <ul class="events-list">
          <li class="events-list-element">
            <div class="caption">No events today.</div>
          </li>
        </ul>
      </div>

      <div class="events-subsection">
        <h2>This week</h2>
        <ul class="events-list">
          <li class="events-list-element">
            <div>Urodziny godziny</div>
            <div class="caption">September 17</div>
          </li>
        </ul>
      </div>

      <div class="events-subsection">
        <h2>Later</h2>
        <ul class="events-list">
          <li class="events-list-element">
            <div>Olabanagaga</div>
            <div class="caption">October 11</div>
          </li>
          <li class="events-list-element">
            <div>Hacktoberfest</div>
            <div class="caption">October 21</div>
          </li>
        </ul>
      </div>
    </section>
  `;
}

module.exports = dateTimeSection;

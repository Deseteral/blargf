const NO_TASKS_MARKUP = `
<div class="no-tasks-container">
  <i class="no-tasks-flag material-icons">outlined_flag</i>
  <div>There are no tasks planned for today.</div>
</div>
`;

function mapTaskToListElement(task) {
  return `
    <li class="list-element">
      <i class="material-icons list-element-icon">radio_button_unchecked</i>
      ${task.content}
    </li>
  `;
}

function tasksSection(context) {
  const { tasks } = context;
  return `
    <section class="card">
      <h1 class="card-header">Tasks</h1>
      <ul class="list">
        ${tasks.length > 0 ? tasks.map(mapTaskToListElement).join('\n') : NO_TASKS_MARKUP}
      </ul>
    </section>
  `;
}

module.exports = tasksSection;

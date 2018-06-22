const NO_TASKS_MARKUP = `
<section class="card">
  <h1 class="card-header">Tasks</h1>
  <div class="no-tasks-container">
    <i class="no-tasks-flag material-icons">outlined_flag</i>
    <div class="caption">There are no tasks planned for today.</div>
  </div>
</section>
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

  if (tasks.length === 0) {
    return NO_TASKS_MARKUP;
  }

  const tasksAmountForm = tasks.length === 1 ? 'task' : 'tasks';

  return `
    <section class="card">
      <h1 class="card-header">Tasks</h1>
      <div class="caption">You have ${tasks.length} ${tasksAmountForm} due today.</div>
      <ul class="list">
        ${tasks.map(mapTaskToListElement).join('\n')}
      </ul>
    </section>
  `;
}

module.exports = tasksSection;

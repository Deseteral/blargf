const numberToWords = require('number-to-words');

const NO_TASKS_MARKUP = `
<div class="no-tasks-container">
  <i class="no-tasks-flag material-icons">outlined_flag</i>
  <div class="caption">There are no tasks planned for today.</div>
</div>
`;

const FAILED_UPDATE_MARKUP = `
<div class="tasks-error-message caption caption--small">
  List might be outdated because of failed update.
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

function renderTaskCountLabel(count) {
  const taskNumberForm = numberToWords.toWords(count);
  const tasksAmountForm = count === 1 ? 'task' : 'tasks';

  return `
    <div class="caption">
      You have ${taskNumberForm} ${tasksAmountForm} due today.
    </div>
  `;
}

function renderTaskList(list) {
  return `
    <ul class="list">
      ${list.map(mapTaskToListElement).join('\n')}
    </ul>
  `;
}

function tasksSection(context) {
  const { tasks: { list, lastUpdateFailed } } = context;

  const isEmpty = list.length === 0;

  const tasksListMarkup = `
    ${renderTaskCountLabel(list.length)}
    ${renderTaskList(list)}
  `;

  return `
    <section class="card">
      <h1>Tasks</h1>
      ${isEmpty ? NO_TASKS_MARKUP : ''}
      ${!isEmpty ? tasksListMarkup : ''}
      ${lastUpdateFailed ? FAILED_UPDATE_MARKUP : ''}
    </section>
  `;
}

module.exports = tasksSection;

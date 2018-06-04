function fetchTasks() {
  return fetch('/tasks')
    .then(data => data.json())
    .then(data => data.tasks)
    .catch(err => alert(err));
}

function renderTasks(tasks) {
  const container = document.querySelector('#app');
  const list = document.createElement('ul');

  for (const task of tasks) {
    const li = document.createElement('li');
    li.innerText = task.name;
    list.appendChild(li);
  }

  container.appendChild(list);
}

window.addEventListener('load', () => {
  fetchTasks().then(renderTasks);
});

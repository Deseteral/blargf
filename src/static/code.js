function fetchTasks() {
  return fetch('/tasks')
    .then(data => data.json())
    .catch(console.error);
}

function renderTasks(tasks) {
  const container = document.querySelector('#app');
  const list = document.createElement('ul');

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerText = task.content;
    list.appendChild(li);
  });

  container.appendChild(list);
}

window.addEventListener('load', () => {
  fetchTasks().then(renderTasks);
});

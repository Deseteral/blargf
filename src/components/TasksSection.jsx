import React, { Fragment } from 'react';
import TaskCountLabel from './TaskCountLabel';
import TaskListElement from './TaskListElement';

function TasksSection({ tasks }) {
  const { list, lastUpdateFailed } = tasks;
  const isEmpty = list.length === 0;

  return (
    <section className="card">
      <h1>Tasks</h1>
      {isEmpty && (
        <div className="no-tasks-container">
          <i className="no-tasks-flag material-icons">outlined_flag</i>
          <div className="caption">There are no tasks planned for today.</div>
        </div>
      )}
      {!isEmpty && (
        <Fragment>
          <TaskCountLabel count={list.length} />
          <ul className="list">
            {list.map(t => <TaskListElement content={t.content} />)}
          </ul>
        </Fragment>
      )}
      {lastUpdateFailed && (
        <div className="caption caption--small caption--error">
          List might be outdated because of failed update.
        </div>
      )}
      <p className="caption">
        Manage your tasks in <a href="https://todoist.com">Todoist</a>.
      </p>
    </section>
  );
}

export default TasksSection;

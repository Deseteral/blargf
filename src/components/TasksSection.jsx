import React, { Fragment } from 'react';
import Card from './Card';
import Caption from './Caption';
import Icon from './Icon';
import TaskCountLabel from './TaskCountLabel';
import TaskListElement from './TaskListElement';

function TasksSection({ tasks }) {
  const { list, lastUpdateFailed } = tasks;
  const isEmpty = list.length === 0;

  return (
    <Card title="Tasks">
      {isEmpty && (
        <div className="no-tasks-container">
          <Icon type="outlined_flag" className="no-tasks-flag" />
          <Caption>There are no tasks planned for today.</Caption>
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
        <Caption error>
          List might be outdated because of failed update.
        </Caption>
      )}
      <Caption>
        Manage your tasks in <a href="https://todoist.com">Todoist</a>.
      </Caption>
    </Card>
  );
}

export default TasksSection;

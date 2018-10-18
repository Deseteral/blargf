import React, { Fragment } from 'react';
import Card from './atomic/Card';
import CardHeader from './atomic/CardHeader';
import Caption from './atomic/Caption';
import Icon from './atomic/Icon';
import TaskCountLabel from './TaskCountLabel';
import TaskListElement from './TaskListElement';

function TasksSection({ tasks }) {
  const { list, lastUpdateFailed } = tasks;
  const isEmpty = list.length === 0;

  return (
    <Card>
      <CardHeader>Tasks</CardHeader>
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
            {list.map((t, idx) => <TaskListElement content={t.content} key={idx} />)}
          </ul>
        </Fragment>
      )}
      {lastUpdateFailed && (
        <Caption error>
          List might be outdated because of failed update.
        </Caption>
      )}
    </Card>
  );
}

export default TasksSection;

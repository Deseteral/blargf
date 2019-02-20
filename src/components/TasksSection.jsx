import React, { Fragment } from 'react';
import styled from 'styled-components';
import Card from './atomic/Card';
import CardHeader from './atomic/CardHeader';
import Caption from './atomic/Caption';
import Icon from './atomic/Icon';
import TaskCountLabel from './TaskCountLabel';

const TaskList = styled.ul`
  margin: 0;
  padding: 0;
`;

const EmptyTaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyTaskListFlag = styled(Icon).attrs({
  type: 'outlined_flag',
  size: '48px',
})`
  margin-bottom: 8px;
  opacity: 0.56;
`;

const TaskListElement = styled.li`
  display: flex;
  align-items: center;
  min-height: 48px;
  list-style: none;

  &:last-of-type {
    border-bottom: none;
  }
`;

const IncompleteTaskIcon = styled(Icon).attrs({
  type: 'radio_button_unchecked',
})`
  margin-right: 8px;
`;

function TasksSection({ tasks }) {
  const { list, lastUpdateFailed } = tasks;
  const isEmpty = list.length === 0;

  return (
    <Card>
      <CardHeader>Tasks</CardHeader>
      {isEmpty && (
        <EmptyTaskListContainer>
          <EmptyTaskListFlag />
          <Caption>There are no tasks planned for today.</Caption>
        </EmptyTaskListContainer>
      )}
      {!isEmpty && (
        <Fragment>
          <TaskCountLabel count={list.length} />
          <TaskList>
            {list.map((t, idx) => (
              <TaskListElement key={idx}>
                <IncompleteTaskIcon /> {t.content}
              </TaskListElement>
            ))}
          </TaskList>
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

import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import Caption from '../components/Caption';
import Icon from '../components/Icon';
import TaskCountLabel from './TaskCountLabel';
import { TaskList } from './model';
import { DataCache } from '../services/register-service';

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyListFlag = styled(Icon).attrs({
  type: 'outlined_flag',
  size: '48px',
})`
  margin-bottom: 8px;
  opacity: 0.56;
`;

const ListElement = styled.li`
  display: flex;
  align-items: center;
  min-height: 48px;
  list-style: none;

  &:last-of-type {
    border-bottom: none;
  }
`;

const DateAggregationSection = styled.section`
  margin-bottom: 8px;
`;

const IncompleteTaskIcon = styled(Icon).attrs({
  type: 'radio_button_unchecked',
})`
  margin-right: 8px;
`;

export interface TasksSectionProps {
  tasks: DataCache<TaskList>
}

function TasksSection({ tasks }: TasksSectionProps): JSX.Element {
  const { data, lastUpdateFailed } = tasks;
  const isEmpty = data.today.length === 0;

  return (
    <Card>
      <CardHeader>Tasks</CardHeader>
      {isEmpty && (
        <EmptyListContainer>
          <EmptyListFlag />
          <Caption>There are no tasks planned for today.</Caption>
        </EmptyListContainer>
      )}
      {!isEmpty && (
        <>
          {[
            { list: data.today, dueLabel: 'due today' },
          ].filter(({ list }) => list.length > 0).map(({ list, dueLabel }) => (
            <DateAggregationSection key={dueLabel}>
              <TaskCountLabel count={list.length} dueLabel={dueLabel} />
              <List>
                {list.map((t, idx) => (
                  <ListElement key={idx}>
                    <IncompleteTaskIcon /> {t.content}
                  </ListElement>
                ))}
              </List>
            </DateAggregationSection>
          ))}
        </>
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

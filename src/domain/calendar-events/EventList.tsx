import React from 'react';
import styled from 'styled-components';
import CardHeader from '../../components/CardHeader';
import Text from '../../components/Text';
import Caption from '../../components/Caption';
import { EventGroup } from './model';

const Container = styled.div`
  margin-bottom: 8px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const List = styled.ul`
  padding-left: 16px;
  margin: 0;
  list-style: none;
`;

const ListElement = styled.li`
  margin-bottom: 4px;
`;

export type EventListProps = EventGroup;

function EventList({ name, eventList }: EventListProps): (JSX.Element | null) {
  if (eventList.length === 0) return null;

  return (
    <Container>
      <CardHeader subheader>{name}</CardHeader>
      <List>
        {eventList.map((e) => (
          <ListElement key={`${e.title}-${e.date}`}>
            <Text>{e.title}</Text>
            <Caption>{e.date}</Caption>
          </ListElement>
        ))}
      </List>
    </Container>
  );
}

export default EventList;

import React from 'react';
import styled from 'react-emotion';
import CardHeader from './atomic/CardHeader';
import Text from './atomic/Text';
import Caption from './atomic/Caption';

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

function EventList({ name, list }) {
  if (list.length === 0) return null;

  return (
    <Container>
      <CardHeader subheader>{name}</CardHeader>
      <List>
        {list.map((e, idx) => (
          <ListElement key={idx}>
            <Text>{e.title}</Text>
            <Caption>{e.date}</Caption>
          </ListElement>
      ))}
      </List>
    </Container>
  );
}

export default EventList;

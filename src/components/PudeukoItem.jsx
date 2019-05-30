import React, { useContext } from 'react';
import styled from 'styled-components';
import Text from './atomic/Text';
import SwipeToDismiss from './atomic/SwipeToDismiss';
import { Store } from './Store';

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

function PudeukoItem({ item }) {
  const { text, link } = item;
  const url = link && link.url;
  const { makeSnackbar } = useContext(Store);

  return (
    <SwipeToDismiss
      id={item.id}
      onSwipedOut={cancel => makeSnackbar(`Removed ${item.id}`, 'UNDO', 2500, cancel)}
      onDismiss={id => console.log(`removed ${id}`)}
    >
      <Link href={url}>
        {text && (<Text>{text}</Text>)}
      </Link>
    </SwipeToDismiss>
  );
}

export default PudeukoItem;

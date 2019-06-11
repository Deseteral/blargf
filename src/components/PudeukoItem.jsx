import React, { useContext } from 'react';
import styled from 'styled-components';
import Text from './atomic/Text';
import SwipeToDismiss from './atomic/SwipeToDismiss';
import { Store } from './Store';

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

const DISMISS_TIMEOUT_MS = 2500;

function deleteItem(id) {
  fetch(`/pudeuko/${id}`, { method: 'DELETE' }).catch(console.error);
}

function PudeukoItem({ item }) {
  const { text, link } = item;
  const url = link && link.url;
  const { makeSnackbar } = useContext(Store);

  const shortText = `"${text.slice(0, 24)}${text.length >= 24 ? '…' : ''}"`;

  return (
    <SwipeToDismiss
      id={item.id}
      dismissTimeoutMs={DISMISS_TIMEOUT_MS}
      onSwipedOut={cancel => makeSnackbar(`Removed ${shortText}`, DISMISS_TIMEOUT_MS, 'UNDO', cancel)}
      onDismiss={deleteItem}
    >
      <Link href={url}>
        {text && (<Text>{text}</Text>)}
      </Link>
    </SwipeToDismiss>
  );
}

export default PudeukoItem;

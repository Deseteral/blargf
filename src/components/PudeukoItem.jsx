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

function deleteItem(id, onError) {
  fetch(`/pudeuko/${id}`, { method: 'DELETE' }).catch(onError);
}

function PudeukoItem({ item }) {
  const { text, link } = item;
  const url = link && link.url;
  const { makeSnackbar } = useContext(Store);

  const shortText = `"${text.slice(0, 24)}${text.length >= 24 ? '…' : ''}"`;
  const onDismissError = (err) => {
    makeSnackbar('An error has occured', 2500);
    console.error(err);
  };

  return (
    <SwipeToDismiss
      id={item.id}
      dismissTimeoutMs={DISMISS_TIMEOUT_MS}
      onSwipedOut={cancel => makeSnackbar(`Removed ${shortText}`, DISMISS_TIMEOUT_MS, 'UNDO', cancel)}
      onDismiss={id => deleteItem(id, onDismissError)}
    >
      <Link href={url}>
        {text && (<Text>{text}</Text>)}
      </Link>
    </SwipeToDismiss>
  );
}

export default PudeukoItem;

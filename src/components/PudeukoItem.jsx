import React, { useContext } from 'react';
import styled from 'styled-components';
import Text from './atomic/Text';
import SwipeToDismiss from './atomic/SwipeToDismiss';
import { Store } from './Store';

const Link = styled.a`
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  margin-right: 8px;
  width: 36px;
  height: 36px;
`;

const DISMISS_TIMEOUT_MS = 2500;

function deleteItem(id, onError) {
  fetch(`/pudeuko/${id}`, { method: 'DELETE' }).catch(onError);
}

function PudeukoItem({ item }) {
  const { text, link, icon } = item;
  const url = link && link.url;
  const iconSrc = icon && icon.src;
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
      onSwipedOut={(cancel) => makeSnackbar(`Removed ${shortText}`, DISMISS_TIMEOUT_MS, 'UNDO', cancel)}
      onDismiss={(id) => deleteItem(id, onDismissError)}
    >
      <Link href={url}>
        {iconSrc && <Icon src={iconSrc} />}
        {text && (<Text>{text}</Text>)}
      </Link>
    </SwipeToDismiss>
  );
}

export default PudeukoItem;

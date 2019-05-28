import React from 'react';
import styled from 'styled-components';
import Text from './atomic/Text';
import SwipeToDismiss from './atomic/SwipeToDismiss';

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

function PudeukoItem({ item }) {
  const { text, link, image } = item;

  const url = link && link.url;
  // const imageUrl = image && image.url;

  return (
    <SwipeToDismiss
      id={item.id}
      onSwipedOut={cancel => setTimeout(() => cancel(), 500)}
      onDismiss={id => console.log(`removed ${id}`)}
    >
      <Link href={url}>
        {text && (<Text>{text}</Text>)}
      </Link>
    </SwipeToDismiss>
  );
}

export default PudeukoItem;

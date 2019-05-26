import React from 'react';
import styled from 'styled-components';
import Text from './atomic/Text';
import SwipeToDismiss from './atomic/SwipeToDismiss';

// const Link = styled.a`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   padding: 4px 0;
//   height: 48px;
//   color: #000000;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.56);
//   text-decoration: none;
//   white-space: nowrap;
//   overflow: hidden;

//   &:last-of-type {
//     border: none;
//   }
// `;

function PudeukoItem({ item }) {
  const { text, link, image } = item;

  const url = link && link.url;
  const imageUrl = image && image.url;

  return (
    <SwipeToDismiss id={item.id} onDismiss={id => console.log(`removed ${id}`)}>
      {text && (<Text>{text}</Text>)}
    </SwipeToDismiss>
  );

  // return (
  //   <Link href={url}>
  //     {imageUrl && <Image src={imageUrl} />}
  //     {text && (<Text>{text}</Text>)}
  //   </Link>
  // );
}

export default PudeukoItem;

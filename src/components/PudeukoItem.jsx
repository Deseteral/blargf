import React from 'react';
import styled from 'react-emotion';

const Link = styled.a`
  display: flex;
  flex-direction: row;
  height: 64px;
  align-items: center;
  border-bottom: 1px solid #717171;
  text-decoration: none;
  color: #000000;
  padding: 4px 0;

  &:last-of-type {
    border: none;
  }
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 8px;
`;

function PudeukoItem({ item }) {
  const { text, link, image } = item;

  const url = link && link.url;
  const imageUrl = image && image.url;

  return (
    <Link href={url}>
      {imageUrl && <Image src={imageUrl} />}
      {text && (<div>{text}</div>)}
    </Link>
  );
}

export default PudeukoItem;

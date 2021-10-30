import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import { PudeukoItem } from './model';

const Link = styled.a`
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #717171;
  padding: 4px 0;
  white-space: nowrap;
  overflow: hidden;
`;

const Icon = styled.img`
  margin-right: 8px;
  width: 36px;
  height: 36px;
`;

// function deleteItem(id, onError) {
//   fetch(`/pudeuko/${id}`, { method: 'DELETE' }).catch(onError);
// }

export interface PudeukoItemProps {
  item: PudeukoItem,
}

function PudeukoListItem({ item }: PudeukoItemProps): JSX.Element {
  const { text, link, icon } = item;
  const url = link && link.url;
  const iconSrc = icon && icon.src;

  return (
    <Link href={url}>
      {iconSrc && <Icon src={iconSrc} />}
      {text && (<Text>{text}</Text>)}
    </Link>
  );
}

export default PudeukoListItem;

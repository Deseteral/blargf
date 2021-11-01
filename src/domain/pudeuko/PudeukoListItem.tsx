import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import { PudeukoItem } from './model';

const Container = styled.div<{ hidden: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #717171;
  height: 48px;
  transition: all .2s ease-in-out;

  ${(props): string => (props.hidden ? 'height: 0; opacity: 0;' : '')}
`;

const Link = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: black;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  flex: 0 0 100%;
`;

const Icon = styled.img`
  margin-right: 8px;
  width: 36px;
  height: 36px;
`;

const ButtonContainer = styled.div`
  position: relative;
  height: 48px;
  display: flex;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  background: none;
  border: none;
  color: #717171;
  cursor: pointer;
  height: 48px;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%);
  padding-left: 50px;
  opacity: 0;
  transition: opacity .2s ease-in-out;

  ${Container}:hover & {
    opacity: 1;
  }
`;

export interface PudeukoItemProps {
  item: PudeukoItem,
}

function PudeukoListItem({ item }: PudeukoItemProps): JSX.Element {
  const [hidden, setHidden] = React.useState<boolean>(false);
  const { text, link, icon } = item;
  const url = link && link.url;
  const iconSrc = icon && icon.src;

  const deleteItem = (id: string): void => {
    fetch(`/pudeuko/${id}`, { method: 'DELETE' }).then(() => setHidden(true));
  };

  return (
    <Container hidden={hidden}>
      <Link href={url}>
        {iconSrc && <Icon src={iconSrc} />}
        {text && (<Text>{text}</Text>)}
      </Link>
      <ButtonContainer>
        <CloseButton onClick={(): void => deleteItem(item.id)}>✕</CloseButton>
      </ButtonContainer>
    </Container>
  );
}

export default PudeukoListItem;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  width: 400px;
  padding: 8px;
  border-radius: 4px;
  background-color: #37474F;
  color: white;
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 8px;
`;

const ActionButton = styled.button`
  padding: 8px;
  font-size: 16px;
  text-transform: uppercase;
  color: #00B0FF;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  background: transparent;
  outline: none;
  transition: background-color .3s ease-in-out;

  &:hover {
    background-color: #B3E5FC3F;
  }

  &:active {
    background-color: #B3E5FC77;
  }
`;

function Snackbar({ text, actionText, action }) {
  return (
    <Container>
      <TextContainer>{text}</TextContainer>
      {(actionText && action) && (
        <ActionButton onClick={action}>{actionText}</ActionButton>
      )}
    </Container>
  );
}

export default Snackbar;

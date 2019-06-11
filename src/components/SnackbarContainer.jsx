import React, { useContext } from 'react';
import styled from 'styled-components';
import { Store } from './Store';
import Snackbar from './atomic/Snackbar';

const Container = styled.div`
  position: fixed;
  bottom: 16px;
  left: 16px;
`;

function SnackbarContainer() {
  const { state } = useContext(Store);
  return (
    <Container>
      {state.snackbar && (
        <Snackbar {...state.snackbar} />
      )}
    </Container>
  );
}

export default SnackbarContainer;

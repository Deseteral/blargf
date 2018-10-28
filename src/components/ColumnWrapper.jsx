import React from 'react';
import styled from 'react-emotion';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const GridContainer = styled.div`
  display: flex;
  max-width: 880px;
  width: 100%;
  justify-content: center;
`;

function ColumnWrapper({ children }) {
  return (
    <Container>
      <GridContainer>
        {children}
      </GridContainer>
    </Container>
  );
}

export default ColumnWrapper;

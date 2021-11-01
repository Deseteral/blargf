import React from 'react';
import styled from 'styled-components';

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

export interface ColumnWrapperProps {
  children: (React.ReactNode | React.ReactNode[])
}

function ColumnWrapper({ children }: ColumnWrapperProps): JSX.Element {
  return (
    <Container>
      <GridContainer>
        {children}
      </GridContainer>
    </Container>
  );
}

export default ColumnWrapper;

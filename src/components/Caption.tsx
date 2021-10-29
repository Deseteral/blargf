import React from 'react';
import styled from 'styled-components';

interface CaptionProps {
  small?: boolean,
  error?: boolean,
  children: (React.ReactNode | React.ReactNode[]),
}

const Caption = styled.div<CaptionProps>`
  font-family: 'Crimson Text', serif;
  opacity: 0.56;
  font-size: ${(props): string => ((props.small || props.error) ? '16px' : '19px')};
  font-style: italic;
  color: ${(props): string => (props.error ? '#B71C1C' : '#000000')}
`;

export default Caption;

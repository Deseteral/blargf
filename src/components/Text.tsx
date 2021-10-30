import React from 'react';

export interface TextProps {
  children: string,
}

function Text({ children }: TextProps): JSX.Element {
  return (
    <div>{children}</div>
  );
}

export default Text;

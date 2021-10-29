import React from 'react';

interface TextProps {
  children: string,
}

function Text({ children }: TextProps): JSX.Element {
  return (
    <div>{children}</div>
  );
}

export default Text;

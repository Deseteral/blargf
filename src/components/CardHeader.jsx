import React from 'react';

function CardHeader({ children, subheader }) {
  return !subheader
    ? <h1>{children}</h1>
    : <h2>{children}</h2>;
}

export default CardHeader;

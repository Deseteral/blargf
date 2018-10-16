import React from 'react';
import css from 'classnames';

function Caption({ children, small, error }) {
  const isSmall = small || error;

  const containerClassName = css(
    'caption',
    isSmall && 'caption--small',
    error && 'caption--error',
  );

  return (
    <div className={containerClassName}>
      {children}
    </div>
  );
}

export default Caption;

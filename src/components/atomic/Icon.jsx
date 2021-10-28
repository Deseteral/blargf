import React from 'react';
import clsx from 'clsx';

function Icon({ className, size, type }) {
  const iconClassName = clsx(className, 'material-icons');
  const style = size ? { fontSize: size } : {};

  return (
    <i className={iconClassName} style={style}>
      {type}
    </i>
  );
}

export default Icon;

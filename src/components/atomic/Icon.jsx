import React from 'react';
import css from 'classnames';

function Icon({ className, size, type }) {
  const iconClassName = css(className, 'material-icons');
  const style = size ? { fontSize: size } : {};

  return (
    <i className={iconClassName} style={style}>
      {type}
    </i>
  );
}

export default Icon;

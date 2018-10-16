import React from 'react';
import css from 'classnames';

function Icon({ className, type }) {
  const iconClassName = css('material-icons', className);

  return (
    <i className={iconClassName}>{type}</i>
  );
}

export default Icon;

import React from 'react';
import clsx from 'clsx';

export interface IconProps {
  className?: string,
  type: string,
  size?: string,
}

function Icon({ className, size, type }: IconProps): JSX.Element {
  const iconClassName = clsx(className, 'material-icons');
  const style = size ? { fontSize: size } : {};

  return (
    <i className={iconClassName} style={style}>
      {type}
    </i>
  );
}

export default Icon;

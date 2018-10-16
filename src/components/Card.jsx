import React from 'react';
import css from 'classnames';

function Card({ className, children, title }) {
  const sectionClassName = css('card', className);

  return (
    <section className={sectionClassName}>
      {title && (<h1>{title}</h1>)}
      {children}
    </section>
  );
}

export default Card;

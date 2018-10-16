import React from 'react';
import css from 'classnames';

function Card({ className, children }) {
  const sectionClassName = css('card', className);

  return (
    <section className={sectionClassName}>
      {children}
    </section>
  );
}

export default Card;

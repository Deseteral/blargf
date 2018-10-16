import React from 'react';
import Icon from './Icon';

function TaskListElement({ content }) {
  return (
    <li className="list-element">
      <Icon type="radio_button_unchecked" className="list-element-icon" />
      {content}
    </li>
  );
}

export default TaskListElement;

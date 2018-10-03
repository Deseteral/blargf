import React from 'react';

function TaskListElement({ content }) {
  return (
    <li className="list-element">
      <i className="material-icons list-element-icon">radio_button_unchecked</i>
      {content}
    </li>
  );
}

export default TaskListElement;

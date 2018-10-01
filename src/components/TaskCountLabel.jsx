import React from 'react';
import numberToWords from 'number-to-words';

function TaskCountLabel({ count }) {
  const taskNumberForm = numberToWords.toWords(count);
  const tasksAmountForm = count === 1 ? 'task' : 'tasks';

  return (
    <div className="caption">
      You have {taskNumberForm} {tasksAmountForm} due today.
    </div>
  );
}

export default TaskCountLabel;

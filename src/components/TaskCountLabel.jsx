import React from 'react';
import numberToWords from 'number-to-words';
import Caption from './Caption';

function TaskCountLabel({ count }) {
  const taskNumberForm = numberToWords.toWords(count);
  const tasksAmountForm = count === 1 ? 'task' : 'tasks';

  return (
    <Caption>
      You have {taskNumberForm} {tasksAmountForm} due today.
    </Caption>
  );
}

export default TaskCountLabel;

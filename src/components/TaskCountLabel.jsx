import React from 'react';
import numberToWords from 'number-to-words';
import Caption from './atomic/Caption';

function TaskCountLabel({ count, dueLabel }) {
  const taskNumberForm = numberToWords.toWords(count);
  const tasksAmountForm = count === 1 ? 'task' : 'tasks';

  return (
    <Caption>
      You have {taskNumberForm} {tasksAmountForm} {dueLabel}.
    </Caption>
  );
}

export default TaskCountLabel;

import React from 'react';
import numberToWords from 'number-to-words';
import Caption from '../../components/Caption';

export interface TaskCountLabelProps {
  count: number,
  dueLabel: string,
}

function TaskCountLabel({ count, dueLabel }: TaskCountLabelProps): JSX.Element {
  const taskNumberForm = numberToWords.toWords(count);
  const tasksAmountForm = count === 1 ? 'task' : 'tasks';

  return (
    <Caption>
      You have {taskNumberForm} {tasksAmountForm} {dueLabel}.
    </Caption>
  );
}

export default TaskCountLabel;

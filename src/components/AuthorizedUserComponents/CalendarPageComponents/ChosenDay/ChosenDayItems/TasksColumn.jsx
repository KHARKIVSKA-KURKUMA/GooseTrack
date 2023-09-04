import { ColumnContainer } from './TaskColumn.styled';
import { AddTaskBtn, ColumnHeadBar, ColumnTasksList } from './TasksColumnItems';

const TasksColumn = ({ tasks, title }) => {
  return (
    <li>
      <ColumnContainer>
        <ColumnHeadBar title={title} />
        <ColumnTasksList tasks={tasks} title={title} />
        <AddTaskBtn />
      </ColumnContainer>
    </li>
  );
};

export default TasksColumn;

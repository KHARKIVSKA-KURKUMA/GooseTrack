import { ColumnContainer } from './TaskColumn.styled';
import { AddTaskBtn, ColumnHeadBar, ColumnTasksList } from './TasksColumnItems';

const TasksColumn = () => {
  return (
    <ColumnContainer>
      <ColumnHeadBar />
      <ColumnTasksList />
      <AddTaskBtn />
    </ColumnContainer>
  );
};

export default TasksColumn;

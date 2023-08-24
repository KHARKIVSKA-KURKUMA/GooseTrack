import { AddTaskBtn, ColumnHeadBar, ColumnTasksList } from './TasksColumnItems';

const TasksColumn = () => {
  return (
    <>
      <ColumnHeadBar />
      <ColumnTasksList />
      <AddTaskBtn />
    </>
  );
};

export default TasksColumn;

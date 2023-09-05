// import { ColumnContainer } from './TaskColumn.styled';
import { TaskItem } from './TaskColumnStyle';
import { AddTaskBtn, ColumnHeadBar, ColumnTasksList } from './TasksColumnItems';

const TasksColumn = ({ tasks, title }) => {
  return (
    <TaskItem>
      <ColumnHeadBar title={title} />
      <ColumnTasksList tasks={tasks} title={title} />
      <AddTaskBtn />
    </TaskItem>
  );
};

export default TasksColumn;

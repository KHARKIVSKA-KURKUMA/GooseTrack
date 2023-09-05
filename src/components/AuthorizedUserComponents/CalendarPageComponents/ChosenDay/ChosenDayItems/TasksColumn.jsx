import { TaskItem } from './TasksColumnStyle';
import { AddTaskBtn, ColumnHeadBar, ColumnTasksList } from './TasksColumnItems';

const TasksColumn = ({ tasks, title, selectedDate }) => {
  return (
    <TaskItem>
      <ColumnHeadBar selectedDate={selectedDate} title={title} />
      <ColumnTasksList
        selectedDate={selectedDate}
        tasks={tasks}
        title={title}
      />
      <AddTaskBtn selectedDate={selectedDate} title={title} />
    </TaskItem>
  );
};

export default TasksColumn;

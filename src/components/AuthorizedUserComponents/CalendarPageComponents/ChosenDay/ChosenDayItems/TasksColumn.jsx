import { TaskItem } from './TasksColumnStyle';
import { AddTaskBtn, ColumnHeadBar, ColumnTasksList } from './TasksColumnItems';
import { useSelector } from 'react-redux';

const TasksColumn = ({ tasks, title, selectedDate }) => {
  const theme = useSelector(state => state.theme);
  const backgroundColor = theme === 'light' ? '#fff' : '#21222C';
  return (
    <TaskItem backgroundColor={backgroundColor}>
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

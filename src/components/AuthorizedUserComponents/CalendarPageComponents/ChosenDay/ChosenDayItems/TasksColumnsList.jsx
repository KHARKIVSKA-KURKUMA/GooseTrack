import { TaskColumnList } from './TaskColumn.styled';
import TasksColumn from './TasksColumn';

const TasksColumnsList = ({ tasks, titles }) => {
  return (
    <TaskColumnList>
      {titles &&
        titles.map(title => {
          const filteredTasks = tasks.filter(task => task.category === title);
          return (
            <TasksColumn key={title} tasks={filteredTasks} title={title} />
          );
        })}
    </TaskColumnList>
  );
};

export default TasksColumnsList;

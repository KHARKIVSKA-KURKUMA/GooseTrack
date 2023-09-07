import TasksColumn from './TasksColumn';
import { TaskColumnList } from './TasksColumnsListStyle';

const TasksColumnsList = ({ tasks, titles, selectedDate }) => {
  return (
    <TaskColumnList>
      {titles &&
        titles.map(title => {
          const filteredTasks = tasks.filter(task => task.category === title);
          return (
            <TasksColumn
              selectedDate={selectedDate}
              key={title}
              tasks={filteredTasks}
              title={title}
            />
          );
        })}
    </TaskColumnList>
  );
};

export default TasksColumnsList;

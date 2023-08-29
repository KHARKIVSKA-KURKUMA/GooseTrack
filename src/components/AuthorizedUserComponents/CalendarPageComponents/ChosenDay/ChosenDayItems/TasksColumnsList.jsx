import { TaskColumnList } from './TaskColumn.styled';
import TasksColumn from './TasksColumn';

const TasksColumnsList = ({ titles }) => {
  return (
    <TaskColumnList>
      {titles && titles.map(title => <TasksColumn key={title} title={title} />)}
    </TaskColumnList>
  );
};

export default TasksColumnsList;

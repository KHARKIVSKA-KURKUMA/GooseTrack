import TaskColumnCard from './TaskColumnCard';
import { TaskColumnContainer } from './TaskColumnItems.styled';

const ColumnTasksList = ({ tasks,title }) => {
  return (
    <TaskColumnContainer title={title}>
      {tasks &&
        tasks.map(task => (
          <TaskColumnCard
            key={task.id}
            description={task.description}
            avatarUrl={task.avatarUrl}
            priority={task.priority}
          />
        ))}
    </TaskColumnContainer>
  );
};

export default ColumnTasksList;

import TaskColumnCard from './TaskColumnCard';
import { TaskColumnContainer } from './TaskColumnItems.styled';
import tasks from '../../../../../../json-for-example/task.json';

const ColumnTasksList = () => {
  return (
    <TaskColumnContainer>
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

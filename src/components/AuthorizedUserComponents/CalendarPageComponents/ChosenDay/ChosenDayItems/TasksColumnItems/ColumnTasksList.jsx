import TaskColumnCard from './TaskColumnCard';
import { TaskColumnContainer } from './TaskColumnItems.styled';

const ColumnTasksList = ({ tasks, title }) => {
  return (
    <TaskColumnContainer title={title}>
      {tasks &&
        tasks.map(task =>
          task.data.map(task => (
            <TaskColumnCard
              key={task.createdAt}
              description={task.title}
              avatarUrl={task.owner.avatarURL}
              id={task.owner._id}
              date={task.date}
              category={task.category}
              priority={task.priority}
            />
          ))
        )}
    </TaskColumnContainer>
  );
};

export default ColumnTasksList;

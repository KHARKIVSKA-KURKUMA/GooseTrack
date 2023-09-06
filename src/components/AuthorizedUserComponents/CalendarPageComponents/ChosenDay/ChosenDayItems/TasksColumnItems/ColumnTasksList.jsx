import { TaskColumnContainer } from './ColumnTasksListStyle';
import TaskColumnCard from './TaskColumnCard';
// import { TaskColumnContainer } from './TaskColumnItems.styled';

const ColumnTasksList = ({ tasks, title, selectedDate }) => {
  return (
    <TaskColumnContainer title={title}>
      {tasks &&
        tasks.map(task =>
          task.data.map(task => (
            <TaskColumnCard
              selectedDate={selectedDate}
              key={task.createdAt}
              description={task.title}
              avatarUrl={task.owner.avatarURL}
              id={task._id}
              date={task.date}
              category={task.category}
              priority={task.priority}
              start={task.start}
              end={task.end}
            />
          ))
        )}
    </TaskColumnContainer>
  );
};

export default ColumnTasksList;

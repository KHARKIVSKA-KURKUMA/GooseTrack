import { tasksSelector } from 'store/selectors';
import { TaskColumnList } from './TaskColumn.styled';
import TasksColumn from './TasksColumn';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserTasksThunk } from 'store/tasks/tasksThunks';

const TasksColumnsList = ({ titles }) => {
  const dispatch = useDispatch();
  const { tasks } = useSelector(tasksSelector);
  useEffect(() => {
    dispatch(getUserTasksThunk());
  }, [dispatch]);
  return (
    <TaskColumnList>
      {titles &&
        titles.map(title => (
          <TasksColumn key={title} tasks={tasks} title={title} />
        ))}
    </TaskColumnList>
  );
};

export default TasksColumnsList;

import { ColumnContainer } from './TaskColumn.styled';
import { AddTaskBtn, ColumnHeadBar, ColumnTasksList } from './TasksColumnItems';
import { getUserTasksThunk } from 'store/tasks/tasksThunks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { tasksSelector } from 'store/selectors';

const TasksColumn = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector(tasksSelector);
  useEffect(() => {
    dispatch(getUserTasksThunk());
  }, [dispatch]);
  return (
    <ColumnContainer>
      <ColumnHeadBar />
      <ColumnTasksList tasks={tasks} />
      <AddTaskBtn />
    </ColumnContainer>
  );
};

export default TasksColumn;

import { ColumnContainer } from './TaskColumn.styled';
import { AddTaskBtn, ColumnHeadBar, ColumnTasksList } from './TasksColumnItems';
import { getUserTasksThunk } from 'store/tasks/tasksThunks';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { tasksSelector } from 'store/selectors';

const TasksColumn = ({ title }) => {
  const dispatch = useDispatch();
  const { tasks } = useSelector(tasksSelector);
  useEffect(() => {
    dispatch(getUserTasksThunk());
  }, [dispatch]);
  return (
    <li>
      <ColumnContainer>
        <ColumnHeadBar title={title} />
        <ColumnTasksList tasks={tasks} />
        <AddTaskBtn />
      </ColumnContainer>
    </li>
  );
};

export default TasksColumn;

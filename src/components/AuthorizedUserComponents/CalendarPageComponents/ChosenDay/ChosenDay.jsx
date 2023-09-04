import { DayCalendarHead, TasksColumnsList } from './ChosenDayItems';

import { Container } from './ChosenDay.styled';
import { useSelector } from 'react-redux';
import { selectedDateSelector, tasksSelector } from 'store/selectors';

const ChosenDay = () => {
  const currentDay = useSelector(selectedDateSelector);
  const { tasks } = useSelector(tasksSelector);
  const tasksForCurrentDay = tasks.filter(task => {
    return task.data.some(dataItem => dataItem.date === currentDay);
  });
  const titleArr = ['to-do', 'in-progress', 'done'];

  return (
    <>
      <Container>
        <DayCalendarHead />
        <TasksColumnsList tasks={tasksForCurrentDay} titles={titleArr} />
      </Container>
    </>
  );
};

export default ChosenDay;

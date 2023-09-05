import { DayCalendarHead, TasksColumnsList } from './ChosenDayItems';

import { Container } from './ChosenDay.styled';
import { useSelector } from 'react-redux';
import { tasksSelector } from 'store/selectors';
import { useParams } from 'react-router-dom';

const ChosenDay = () => {
  const { currentDate } = useParams();
  const { tasks } = useSelector(tasksSelector);
  const tasksForCurrentDay = tasks.filter(task => {
    return task.data.some(dataItem => dataItem.date === currentDate);
  });
  console.log('tasksForCurrentDay', tasksForCurrentDay);

  const titleArr = ['to-do', 'in-progress', 'done'];

  return (
    <>
      <Container>
        <DayCalendarHead selectedDate={currentDate} />
        <TasksColumnsList tasks={tasksForCurrentDay} titles={titleArr} />
      </Container>
    </>
  );
};

export default ChosenDay;

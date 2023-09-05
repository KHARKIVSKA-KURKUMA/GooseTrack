import { DayCalendarHead, TasksColumnsList } from './ChosenDayItems';
import { Container } from './ChosenDay.styled';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelector } from 'store/selectors';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getTasksByDayThunk } from 'store/tasks/tasksThunks';
import { format, parse } from 'date-fns';

const ChosenDay = () => {
  const { currentDate } = useParams();
  const { byDay } = useSelector(tasksSelector);
  const dispatch = useDispatch();
  const date = parse(currentDate, 'yyyy-MM-dd', Date.now());
  const formattedDay = format(date, 'yyyy-MM-dd');

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    dispatch(
      getTasksByDayThunk({
        day: formattedDay,
      })
    );
  }, [dispatch]);
  const tasksForCurrentDay = byDay;
  console.log('tasksForCurrentDay', tasksForCurrentDay);
  const titleArr = ['to-do', 'in-progress', 'done'];

  return (
    <Container>
      <DayCalendarHead selectedDate={currentDate} />
      <TasksColumnsList
        selectedDate={currentDate}
        tasks={tasksForCurrentDay}
        titles={titleArr}
      />
    </Container>
  );
};

export default ChosenDay;

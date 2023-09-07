import { DayCalendarHead, TasksColumnsList } from './ChosenDayItems';
import { Container, LoaderContainer } from './ChosenDay.styled';
import { useDispatch, useSelector } from 'react-redux';
import { tasksSelector } from 'store/selectors';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTasksByDayThunk } from 'store/tasks/tasksThunks';
import { format, parse } from 'date-fns';
import Loader from '../../../Loader/Loader';

const ChosenDay = () => {
  const { currentDate } = useParams();
  const { byDay } = useSelector(tasksSelector);
  const dispatch = useDispatch();
  const date = parse(currentDate, 'yyyy-MM-dd', Date.now());
  const formattedDay = format(date, 'yyyy-MM-dd');
  const [isLoading, setIsLoading] = useState(true);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    dispatch(getTasksByDayThunk({ day: formattedDay }))
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Помилка завантаження даних:', error);
      });
  }, [dispatch, formattedDay]);

  const tasksForCurrentDay = byDay;
  const titleArr = ['to-do', 'in-progress', 'done'];

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  return (
    <>
      <Container>
        <DayCalendarHead selectedDate={currentDate} />
        <TasksColumnsList
          selectedDate={currentDate}
          tasks={tasksForCurrentDay}
          titles={titleArr}
        />
      </Container>
    </>
  );
};

export default ChosenDay;

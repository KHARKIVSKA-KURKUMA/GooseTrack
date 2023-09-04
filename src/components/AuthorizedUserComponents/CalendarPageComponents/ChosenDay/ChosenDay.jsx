import { useParams } from 'react-router-dom';
import { DayCalendarHead, TasksColumnsList } from './ChosenDayItems';

import { Container } from './ChosenDay.styled';

const ChosenDay = () => {
  const { currentDay } = useParams();
  console.log('currentDay :>> ', currentDay);
  const titleArr = ['To do', 'In progress', 'Done'];
  return (
    <>
      {/* <MainLayout /> */}
      <Container>
        <DayCalendarHead />
        <TasksColumnsList titles={titleArr} />
      </Container>
    </>
  );
};

export default ChosenDay;

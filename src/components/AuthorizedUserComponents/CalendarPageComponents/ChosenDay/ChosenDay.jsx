import { useParams } from 'react-router-dom';
import { DayCalendarHead, TasksColumnsList } from './ChosenDayItems';
// import MainLayout from 'components/AuthorizedUserComponents/MainLayout/MainLayout';
import { Container } from './ChosenDay.styled';

const ChosenDay = () => {
  const { currentDay } = useParams();
  console.log(currentDay);
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

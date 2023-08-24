import CalendarToolbar from 'components/AuthorizedUserComponents/CalendarPageComponents/CalendarToolbar';
import ChosenDay from 'components/AuthorizedUserComponents/CalendarPageComponents/ChosenDay';
import ChosenMonth from 'components/AuthorizedUserComponents/CalendarPageComponents/ChosenMonth';
import MainLayout from 'components/AuthorizedUserComponents/MainLayout/MainLayout';

const CalendarPage = () => {
  return (
    <>
      <MainLayout />
      <CalendarToolbar />
      <ChosenMonth />
      <ChosenDay />
    </>
  );
};

export default CalendarPage;

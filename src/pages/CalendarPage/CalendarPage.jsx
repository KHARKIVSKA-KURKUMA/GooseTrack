import CalendarToolbar from 'components/AuthorizedUserComponents/CalendarPageComponents/CalendarToolbar';
import ChosenDay from 'components/AuthorizedUserComponents/CalendarPageComponents/ChosenDay';
import ChosenMonth from 'components/AuthorizedUserComponents/CalendarPageComponents/ChosenMonth';

const CalendarPage = () => {
  return (
    <>
      <CalendarToolbar />
      <ChosenMonth />
      <ChosenDay />
    </>
  );
};

export default CalendarPage;

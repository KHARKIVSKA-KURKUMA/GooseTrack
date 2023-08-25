import CalendarToolbar from 'components/AuthorizedUserComponents/CalendarPageComponents/CalendarToolbar';
import ChosenDay from 'components/AuthorizedUserComponents/CalendarPageComponents/ChosenDay';
import ChosenMonth from 'components/AuthorizedUserComponents/CalendarPageComponents/ChosenMonth';
import MainLayout from 'components/AuthorizedUserComponents/MainLayout/MainLayout';
import PageLayout from '../../components/PageLayout/PageLayout'

const CalendarPage = () => {
  return (
    <PageLayout>
      <MainLayout />
      <CalendarToolbar />
      <ChosenMonth />
      <ChosenDay />
    </PageLayout>
  );
};

export default CalendarPage;

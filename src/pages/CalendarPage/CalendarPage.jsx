import CalendarToolbar from 'components/AuthorizedUserComponents/CalendarPageComponents/CalendarToolbar';
import MainLayout from 'components/AuthorizedUserComponents/MainLayout/MainLayout';
import PageLayout from '../../components/PageLayout/PageLayout';
import { Outlet } from 'react-router-dom';

const CalendarPage = () => {
  return (
    <PageLayout>
      <MainLayout />
      <CalendarToolbar />
      <Outlet />
    </PageLayout>
  );
};

export default CalendarPage;

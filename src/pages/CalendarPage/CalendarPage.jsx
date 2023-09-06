import CalendarToolbar from 'components/AuthorizedUserComponents/CalendarPageComponents/CalendarToolbar';
import MainLayout from 'components/AuthorizedUserComponents/MainLayout/MainLayout';
import PageLayout from '../../components/PageLayout/PageLayout';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectedDateSelector } from 'store/selectors';

const CalendarPage = () => {
  const currentDate = useSelector(selectedDateSelector);
  const navigate = useNavigate();
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    navigate(`/calendar/month/${currentDate}`);
  }, []);
  return (
    <PageLayout>
      <MainLayout />
      <CalendarToolbar />
      <Outlet />
    </PageLayout>
  );
};

export default CalendarPage;

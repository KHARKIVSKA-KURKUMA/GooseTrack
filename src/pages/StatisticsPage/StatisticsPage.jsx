import MainLayout from 'components/AuthorizedUserComponents/MainLayout/MainLayout';
import PeriodPaginator from 'components/AuthorizedUserComponents/StatisticsPageComponents/PeriodPaginator';
import StatisticsChart from 'components/AuthorizedUserComponents/StatisticsPageComponents/StatisticsChart';

const StatisticsPage = () => {
  return (
    <>
      <MainLayout />
      <PeriodPaginator />
      <StatisticsChart />
    </>
  );
};

export default StatisticsPage;

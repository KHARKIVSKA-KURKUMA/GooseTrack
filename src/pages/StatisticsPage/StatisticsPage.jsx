import MainLayout from 'components/AuthorizedUserComponents/MainLayout/MainLayout';
import PeriodPaginator from 'components/AuthorizedUserComponents/StatisticsPageComponents/PeriodPaginator';
import StatisticsChart from 'components/AuthorizedUserComponents/StatisticsPageComponents/StatisticsChart';
import PageLayout from '../../components/PageLayout/PageLayout'

const StatisticsPage = () => {
  return (
    <PageLayout>
      <MainLayout />
      <PeriodPaginator />
      <StatisticsChart />
    </PageLayout>
  );
};

export default StatisticsPage;

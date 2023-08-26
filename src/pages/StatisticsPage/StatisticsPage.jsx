import MainLayout from 'components/AuthorizedUserComponents/MainLayout/MainLayout';
import PeriodPaginator from 'components/AuthorizedUserComponents/StatisticsPageComponents/PeriodPaginator';
import StatisticsChart from 'components/AuthorizedUserComponents/StatisticsPageComponents/StatisticsChart';
import PageLayout from '../../components/PageLayout/PageLayout';
import { StatisticsContainer } from 'components/AuthorizedUserComponents/StatisticsPageComponents/StatisticsPage.styled';

const StatisticsPage = () => {
  return (
    <PageLayout>
      <MainLayout />
      <StatisticsContainer>
        <PeriodPaginator />
        <StatisticsChart />
      </StatisticsContainer>
    </PageLayout>
  );
};

export default StatisticsPage;

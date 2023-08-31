import AuthSection from 'components/UnauthorizedUserComponents/MainPageComponents/AuthSection';
import Description from 'components/UnauthorizedUserComponents/MainPageComponents/Description';
import ReviewsSlider from 'components/UnauthorizedUserComponents/MainPageComponents/ReviewsSlider';
import PageLayout from '../../components/PageLayout/PageLayout';

const MainPage = () => {
  return (
    <PageLayout>
      <AuthSection />
      <Description />
      <ReviewsSlider />
    </PageLayout>
  );
};

export default MainPage;

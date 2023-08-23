import AuthSection from 'components/UnauthorizedUserComponents/MainPageComponents/AuthSection';
import Description from 'components/UnauthorizedUserComponents/MainPageComponents/Description';
import ReviewsSlider from 'components/UnauthorizedUserComponents/MainPageComponents/ReviewsSlider';

const MainPage = () => {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />
    </>
  );
};

export default MainPage;

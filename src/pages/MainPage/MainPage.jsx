import AuthSection from 'components/UnauthorizedUserComponents/MainPageComponents/AuthSection/AuthSection';
import Description from 'components/UnauthorizedUserComponents/MainPageComponents/Description/Description';
import ReviewsSlider from 'components/UnauthorizedUserComponents/MainPageComponents/ReviewsSlider/ReviewsSlider';

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

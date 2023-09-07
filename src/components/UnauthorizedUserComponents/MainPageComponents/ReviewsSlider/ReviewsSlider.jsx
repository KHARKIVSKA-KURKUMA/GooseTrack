import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import arrowRight from '../../../../img/rightArrow.svg';
import userAvatar from '../../../../img/ph_user.svg';

import {
  Container,
  Title,
  ReviewWrapper,
  UserWrapper,
  UserAvatar,
  UserName,
  UserReview,
  ArrowLeft,
  ArrowRight,
  ArrowWrapper,
  LoaderContainer,
} from './ReviewsSlider.styled';

import Loader from '../../../Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { feedbackSelector } from 'store/selectors';
import { useEffect } from 'react';
import { getAllFeedbacks } from 'store/feedback/feedbackThunks';

const ReviewsSlider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFeedbacks());
  }, [dispatch]);

  const data = useSelector(feedbackSelector);
  const reviews = data.feedback || [];

  return (
    <Container>
      {reviews.length > 0 ? (
        <>
          <Title>Reviews</Title>
          <Swiper
            modules={[Navigation, Autoplay, EffectCoverflow]}
            grabCursor={true}
            effect={'coverflow'}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 50,
              modifier: 1,
              slideShadows: false,
            }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              waitForTransition: false,
            }}
            navigation={{
              prevEl: '#custom-prev-button',
              nextEl: '#custom-next-button',
            }}
            breakpoints={{
              1440: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
          >
            {reviews.map(review => {
              const starIcons = [];
              for (let i = 0; i < review.rating; i++) {
                starIcons.push(
                  <FaStar
                    key={i}
                    color={'#FFAC33'}
                    style={{ marginRight: '10px' }}
                  />
                );
              }
              for (let i = review.rating; i < 5; i++) {
                starIcons.push(
                  <FaStar
                    key={i}
                    color={'#CEC9C1'}
                    style={{ marginRight: '10px' }}
                  />
                );
              }

              return (
                <SwiperSlide key={review._id}>
                  <ReviewWrapper>
                    <UserWrapper>
                      {review.owner === null ||
                      review.owner === undefined ||
                      review.owner.length === 0 ||
                      review.owner.avatarURL === null ||
                      review.owner.avatarURL === undefined ||
                      review.owner.avatarURL.length === 0 ? (
                        <UserAvatar src={userAvatar} alt="UserAvatar" />
                      ) : (
                        <UserAvatar
                          src={review.owner.avatarURL}
                          alt="UserAvatar"
                        />
                      )}
                      <div>
                        {review.owner === null ||
                        review.owner.length === 0 ||
                        review.owner === undefined ? (
                          <UserName>USER</UserName>
                        ) : (
                          <UserName>{review.owner.name}</UserName>
                        )}
                        <div>{starIcons}</div>
                      </div>
                    </UserWrapper>
                    <UserReview>{review.text}</UserReview>
                  </ReviewWrapper>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <ArrowWrapper>
            <ArrowLeft id="custom-prev-button">
              <img src={arrowRight} alt="arrowLeft" />
            </ArrowLeft>
            <ArrowRight id="custom-next-button">
              <img src={arrowRight} alt="arrowRight" />
            </ArrowRight>
          </ArrowWrapper>
        </>
      ) : (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
    </Container>
  );
};

export default ReviewsSlider;

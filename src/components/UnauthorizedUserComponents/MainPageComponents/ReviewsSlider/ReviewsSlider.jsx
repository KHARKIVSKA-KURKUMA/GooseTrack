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
} from './ReviewsSlider.styled';

import { useDispatch, useSelector } from 'react-redux';
import { feedbackSelector } from 'store/selectors';
import { useEffect } from 'react';
import { getAllFeedbacks } from 'store/feedback/feedbackThunks';

// const reviews = [
//   {
//     _id: 'id-1',
//     avatarUrl: userAvatar,
//     rating: 2,
//     text: 'GooseTrack is impressive.',
//     owner: {
//       name: 'Rosie Simpson',
//     },
//   },
//   {
//     _id: 'id-2',
//     avatarUrl: userAvatar,
//     rating: 0,
//     text: 'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
//     owner: {
//       name: 'Hermione Kline',
//     },
//   },
//   {
//     _id: 'id-3',
//     avatarUrl: userAvatar,
//     rating: 5,
//     text: 'The calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
//     owner: {
//       name: 'Eden Clements',
//     },
//   },
//   {
//     _id: 'id-4',
//     avatarUrl: userAvatar,
//     rating: 4,
//     text: 'Highly recommended.',
//     owner: {
//       name: 'Annie Copeland',
//     },
//   },
// ];

const ReviewsSlider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFeedbacks());
  }, [dispatch]);

  const data = useSelector(feedbackSelector);
  console.log('feedback :>> ', data.feedback);

  const reviews = data.feedback || [];

  console.log(
    'rewiews.map(review=>{}) :>> ',
    reviews.map(review => {
      console.log('review.owner :>> ', review.owner);
    })
  );

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
            // autoHeight={true}
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
                      {review.avatarUrl > 0 ? (
                        <UserAvatar src={review.avatarUrl} alt="UserAvatar" />
                      ) : (
                        <UserAvatar src={userAvatar} alt="UserAvatar" />
                      )}
                      <div>
                        {review.owner === null || review.owner === undefined ? (
                          'USER'
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
        <div>Loading reviews...</div>
      )}
    </Container>
  );
};

export default ReviewsSlider;

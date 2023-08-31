import { useFormik } from 'formik';
import * as yup from 'yup';
import { FaStar } from 'react-icons/fa';
import { BiPencil } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReview, getAllFeedbacks,addReview, editReview } from 'store/feedback/feedbackThunks';
import ModalButton from 'components/GeneralComponents/ModalButton/ModalButton';
// import { reviewsSelector } from 'store/selectors';

import {
  StarWrapper,
  NameLabel,
  InputStars,
  FeedbackWrapper,
  InputFeedback,
  ErrorsMessage,
  IconWrapper,
  CircleIcon,
  TitleWrapper,
  IconButton,
  NotificationButton,
} from './FeedbackForm.styled';

const FeedbackForm = ({ toggleModal }) => {
  const dispatch = useDispatch();
  // const  review  = useSelector(reviewsSelector);
  const review = null;

  const [isEditing, setIsEditing] = useState(null);

  /// Validate Feedback form with YUP ///
  const feedbackValidationSchema = yup.object().shape({
    rating: yup.number().min(1).max(5).required('Leave your rating'),
    text: yup
      .string()
      .trim()
      .notOneOf([' '])
      .max(300)
      .required('Leave your feedback'),
  });

       /// Delete review function ///
   const handleDeleteReview = () => {
    const confirmToastId = toast.warning('Delete review?', {
      autoClose: false,
      position: toast.POSITION.TOP_CENTER,
      closeOnClick: false,
      draggable: false,
      pauseOnHover: false,
      closeButton: (
        <>
        <NotificationButton onClick={() => handleDeleteConfirmation(true)}>Yes</NotificationButton>
        <NotificationButton onClick={() => handleDeleteConfirmation(false)}>No</NotificationButton> </>
      ),
    });

    const handleDeleteConfirmation = async (confirmed) => {
      if (confirmed) {
        dispatch(deleteReview());
        toast.dismiss(confirmToastId);
        toast.info('Review deleted');
           toggleModal();
      } else {
        toast.dismiss(confirmToastId);
      }
    };
  };

  /// Formik function / main logic ///
  const formik = useFormik({
    initialValues: {
      rating: 5,
      text: '',
    },
    validationSchema: feedbackValidationSchema,

    onSubmit: (values, actions) => {
      if (isEditing) {
        dispatch(editReview(values)) &&
          toast.success('Review updated successfully');
        
      } else {
        dispatch(addReview(values)) &&
          toast.success('Review created successfully');
      }
      console.log(values);
      actions.resetForm();
      toggleModal();
    },
  });


  useEffect(() => {
    dispatch(getAllFeedbacks());
    if (review && review.length > 0) {
      formik.setValues({
        rating: review[0].rating,
        text: review[0].text,
      });
    }
  }, [dispatch, review]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <StarWrapper>
        <NameLabel>Rating</NameLabel>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <label key={i}>
              <InputStars
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => formik.setFieldValue('rating', ratingValue)}
                onChange={formik.handleChange}
              />
              <FaStar
                size={24}
                color={
                  ratingValue <= formik.values.rating ? '#FFAC33' : '#CEC9C1'
                }
                style={{ marginRight: '2px' }}
              />
            </label>
          );
        })}
        {formik.errors.rating && formik.touched.rating && (
          <ErrorsMessage>Leave your rating</ErrorsMessage>
        )}
      </StarWrapper>
      <FeedbackWrapper>
        <TitleWrapper>
          <NameLabel>Review</NameLabel>
          {/* {review && review.length > 0 && */}
            <IconWrapper>
            <IconButton type="button" onClick={() => setIsEditing(true)}>
              <CircleIcon backgroundColor="#E3F3FF">
                <BiPencil size={20} color={'#3E85F3'} />
              </CircleIcon>
            </IconButton>
            <IconButton type="button" onClick={handleDeleteReview}>
              <CircleIcon backgroundColor="rgba(234, 61, 101, 0.2)">
                <RiDeleteBinLine size={20} color={'#EA3D65'} />
              </CircleIcon>
            </IconButton>
          </IconWrapper>
         
        </TitleWrapper>

        <InputFeedback
          type="text"
          rows="7"
          name="text"
          value={formik.values.text}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter text"
          hasError={!!formik.errors.text && !!formik.touched.text}
        />
        {formik.errors.text && formik.touched.text && (
          <ErrorsMessage>{formik.errors.text}</ErrorsMessage>
        )}
      </FeedbackWrapper>
      {(!review || review.length === 0) && (
        <div>
          <ModalButton
            type="submit"
            textColor="#FFFFFF"
            backgroundColor="#3E85F3"
          >
            <span>Save</span>
          </ModalButton>
          <ModalButton type="button" onClick={toggleModal}>
            Cancel
          </ModalButton>
        </div>
      )}
      {review && review.length > 0 && isEditing && (
        <div>
          <ModalButton
            type="submit"
            textColor="#FFFFFF"
            backgroundColor="#3E85F3"
          >
            <span>Edit</span>
          </ModalButton>
          <ModalButton type="button" onClick={toggleModal}>
            Cancel
          </ModalButton>
        </div>
      )}
    </form>
  );
};

export default FeedbackForm;


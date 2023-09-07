import { useFormik } from 'formik';
import * as yup from 'yup';
import { FaStar } from 'react-icons/fa';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteReview,
  addReview,
  editReview,
} from 'store/feedback/feedbackThunks';
import ModalButton from 'components/GeneralComponents/ModalButton/ModalButton';
import { feedbackSelector } from 'store/selectors';

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
  StyledBiPencil,
  StyledRiDeleteBinLine,
} from './FeedbackForm.styled';

const FeedbackForm = ({ toggleModal }) => {
  const theme = useSelector(state => state.theme);
  const data = useSelector(feedbackSelector);
  const reviews = data.feedback || [];

  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);

  const color =
    theme === 'light' ? 'rgba(52, 52, 52, 0.80)' : 'rgba(250, 250, 250, 0.30)';
  const colorText = theme === 'light' ? '#343434 ' : '#FFFFFF';
  const colorTextArea = theme === 'light' ? '#343434 ' : '#FFFFFF';
  const backgroundColor = theme === 'light' ? '#F6F6F6 ' : '#171820';
  const borderColor = theme === 'light' ? 'rgba(255, 255, 255, 0.15) ' : 'none';

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

  const initialValues = {
    rating: reviews.length > 0 ? reviews[0].rating : 5,
    text: reviews.length > 0 ? reviews[0].text : '',
  };

  /// Delete review function ///
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseYes = actions => {
    dispatch(deleteReview({ _id: reviews[0]._id }));
    setOpen(false);
    toggleModal();
  };

  /// Formik function / main logic ///
  const formik = useFormik({
    initialValues,
    validationSchema: feedbackValidationSchema,

    onSubmit: values => {
      if (isEditing && reviews.length > 0) {
        dispatch(editReview({ ...values, _id: reviews[0]._id }));
      } else {
        dispatch(addReview(values));
      }
      toggleModal();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <StarWrapper>
        <NameLabel color={color}>Rating</NameLabel>
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
                disabled={!isEditing && reviews.length > 0}
              />
              <FaStar
                size={24}
                color={
                  ratingValue <= formik.values.rating
                    ? '#FFAC33'
                    : theme === 'light'
                    ? '#CEC9C1'
                    : '#353647'
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
          <NameLabel color={color}>Review</NameLabel>
          {reviews && reviews.length > 0 && (
            <IconWrapper>
              <IconButton type="button" onClick={() => setIsEditing(true)}>
                <CircleIcon backgroundColor="#E3F3FF">
                  <StyledBiPencil size={20} />
                </CircleIcon>
              </IconButton>
              <IconButton type="button" onClick={handleClickOpen}>
                <CircleIcon backgroundColor="rgba(234, 61, 101, 0.2)">
                  <StyledRiDeleteBinLine size={20} />
                </CircleIcon>
              </IconButton>
            </IconWrapper>
          )}
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
          disabled={!isEditing && reviews.length > 0}
          colorText={colorText}
          colorTextArea={colorTextArea}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
        />
        {formik.errors.text && formik.touched.text && (
          <ErrorsMessage>{formik.errors.text}</ErrorsMessage>
        )}
      </FeedbackWrapper>
      {(!reviews || reviews.length === 0) && (
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
      {reviews && reviews.length > 0 && isEditing && (
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Delete review?'}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseYes}>Yes</Button>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};

export default FeedbackForm;

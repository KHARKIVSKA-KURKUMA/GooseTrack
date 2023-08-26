import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FaStar } from 'react-icons/fa';
import { BiPencil } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';

import Overlay from 'components/GeneralComponents/Overlay/Overlay';
import Modal from 'components/GeneralComponents/ModalWindow/ModalWindow';
import ModalButton from 'components/GeneralComponents/ModalButton/ModalButton';
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
  CloseModalButton
} from './AddFeedbackModal.styled';

const AddFeedbackModal = () => {
  const feedbackValidationSchema = yup.object().shape({
    rating: yup.number().min(1).required('Leave your rating'),
    feedback: yup
      .string()
      .trim()
      .notOneOf([' '])
      .max(300)
      .required('Leave your feedback'),
  });

  const formik = useFormik({
    initialValues: {
      rating: 5,
      feedback: '',
    },
    validationSchema: feedbackValidationSchema,
    onSubmit: (values, actions) => {
      console.log('Formik Rating:', formik.values.rating);
      console.log('Formik Feedback:', formik.values.feedback);
      actions.resetForm();
    },
  });

  console.log(formik.errors);

  return (
    <Overlay>
      <Modal>
        <CloseModalButton type='button'>
            <GrClose size={24}/>
        </CloseModalButton>
      
        <form onSubmit={formik.handleSubmit}>
          <StarWrapper>
            <NameLabel>Rating</NameLabel>
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;

              console.log('Rating V:', ratingValue);
              console.log('Formik R:', formik.values.rating);
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
                      ratingValue <= formik.values.rating
                        ? '#FFAC33'
                        : '#CEC9C1'
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
              <IconWrapper>
                <CircleIcon backgroundColor="#E3F3FF">
                  <BiPencil size={20} color={'#3E85F3'} />
                </CircleIcon>
                <CircleIcon backgroundColor="rgba(234, 61, 101, 0.2)">
                  <RiDeleteBinLine size={20} color={'#EA3D65'} />
                </CircleIcon>
              </IconWrapper>
            </TitleWrapper>

            <InputFeedback
              type="text"
              rows="7"
              name="feedback"
              value={formik.values.feedback}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter text"
              hasError={!!formik.errors.feedback && !!formik.touched.feedback}
            />
            {formik.errors.feedback && formik.touched.feedback && (
              <ErrorsMessage>{formik.errors.feedback}</ErrorsMessage>
            )}
          </FeedbackWrapper>
          <div>
            <ModalButton textColor="#FFFFFF" backgroundColor="#3E85F3">
              Save/Edit
            </ModalButton>
            <ModalButton>Cancel</ModalButton>
          </div>
        </form>
      </Modal>
    </Overlay>
  );
};

export default AddFeedbackModal;

import { useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { BiPencil } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

import {
  EditWrapper,
  Span,
  TitleWrapper,
  NameLabel,
  Textarea,
  ModalButton,
  ButtonWrapper,
  CheckBoxLabel,
  LowInput,
  HighInput,
  MediumInput,
  CheckBoxWrapper,
  TimeWrapper,
  TimeBox,
  TimeInput,
  ErrorsMessage,
} from './TaskForm.styled';

const TaskForm = ({ toggleModal, status }) => {

  /// Validate Feedback form with YUP ///
  const taskFormValidationSchema = yup.object().shape({
    task: yup
      .string()
      .trim()
      .notOneOf([' '])
      .min(1)
      .max(250)
      .required('Write down your task'),
    startTime: yup.string().required('Choose a time'),
    endTime: yup
      .string()
      .required('Choose a time')
      .test(
        'greater-than-start',
        'End time must be greater than start time',
        function (value) {
          const startTime = this.resolve(yup.ref('startTime'));

          const [startHour, startMinute] = startTime.split(':').map(Number);
          const [endHour, endMinute] = value.split(':').map(Number);

          const totalStartMinutes = startHour * 60 + startMinute;
          const totalEndMinutes = endHour * 60 + endMinute;

          return totalEndMinutes > totalStartMinutes;
        }
      ),
    priority: yup
      .string()
      .required('Select a priority')
      .oneOf(['low', 'medium', 'high'], 'Invalid priority value'),
  });

  const formik = useFormik({
    initialValues: {
      task: '',
      startTime: '09:00',
      endTime: '12:00',
      priority: 'low',
    },

    validationSchema: taskFormValidationSchema,

    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TitleWrapper>
        <NameLabel>Title</NameLabel>
        <Textarea
          type="text"
          name="task"
          rows="5"
          value={formik.values.task}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter text"
          hasError={!!formik.errors.task && !!formik.touched.task}
        ></Textarea>
      </TitleWrapper>
      {formik.errors.task && formik.touched.task && (
        <ErrorsMessage>{formik.errors.task}</ErrorsMessage>
      )}

      <TimeBox>
        <TimeWrapper>
          <NameLabel>Start</NameLabel>
          <TimeInput
            type="time"
            name="startTime"
            value={formik.values.startTime}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={!!formik.errors.startTime && !!formik.touched.startTime}
          />
        </TimeWrapper>
        <TimeWrapper>
          <NameLabel>End</NameLabel>
          <TimeInput
            type="time"
            name="endTime"
            value={formik.values.endTime}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={!!formik.errors.endTime && !!formik.touched.endTime}
          />
        </TimeWrapper>
      </TimeBox>
      {formik.errors.startTime && formik.touched.startTime && (
        <ErrorsMessage>{formik.errors.startTime}</ErrorsMessage>
      )}
      {formik.errors.endTime && formik.touched.endTime && (
        <ErrorsMessage>{formik.errors.endTime}</ErrorsMessage>
      )}

      <CheckBoxWrapper>
        <CheckBoxLabel>
          <LowInput
            type="radio"
            name="priority"
            value="low"
            checked={formik.values.priority === 'low'}
            onChange={formik.handleChange}
          />
          <span>Low</span>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <MediumInput
            type="radio"
            name="priority"
            value="medium"
            checked={formik.values.priority === 'medium'}
            onChange={formik.handleChange}
          />
          <span>Medium</span>
        </CheckBoxLabel>
        <CheckBoxLabel>
          <HighInput
            type="radio"
            name="priority"
            value="high"
            checked={formik.values.priority === 'high'}
            onChange={formik.handleChange}
          />
          <span>High</span>
        </CheckBoxLabel>
      </CheckBoxWrapper>
      {formik.errors.priority && formik.touched.priority && (
        <ErrorsMessage>{formik.errors.priority}</ErrorsMessage>
      )}

      <ButtonWrapper>
        <ModalButton type="submit" textColor="#FFFFFF" backgroundColor="#3E85F3">
          <EditWrapper>
            <BiPencil size={20} />   <AiOutlinePlus size={22}/><Span>Edit</Span>
          </EditWrapper>
        </ModalButton>
        <ModalButton type="button" onClick={toggleModal}>
          Cancel
        </ModalButton>
      </ButtonWrapper>
    </form>
  );
};

export default TaskForm;

import { useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { BiPencil } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { editTask, addTask } from 'store/tasks/tasksThunks';
import { useSelector } from 'react-redux';

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
import { setIsChanged } from 'store/tasks/tasksSlice';

const TaskForm = ({ toggleModal, category, taskToEdit, date }) => {
  const theme = useSelector(state => state.theme);
  const color =
    theme === 'light' ? 'rgba(52, 52, 52, 0.80)' : 'rgba(250, 250, 250, 0.30)';
  const colorText = theme === 'light' ? '#343434 ' : '#FFFFFF';
  const colorTextArea = theme === 'light' ? '#343434 ' : '#FFFFFF';
  const backgroundColor = theme === 'light' ? '#F6F6F6 ' : '#171820';
  const borderColor = theme === 'light' ? 'rgba(255, 255, 255, 0.15) ' : 'none';

  const dispatch = useDispatch();

  /// Validate Feedback form with YUP ///
  const taskFormValidationSchema = yup.object().shape({
    title: yup
      .string()
      .trim()
      .notOneOf([' '])
      .min(1)
      .max(250)
      .required('Write down your task'),
    start: yup.string().required('Choose a time'),
    end: yup
      .string()
      .required('Choose a time')
      .test(
        'greater-than-start',
        'End time must be greater than start time',
        function (value) {
          const start = this.resolve(yup.ref('start'));

          const [startHour, startMinute] = start.split(':').map(Number);
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
    date: yup.date().required(),
    category: yup
      .string()
      .oneOf(['to-do', 'in-progress', 'done'], 'Invalid priority value')
      .required('Select a category'),
  });

  const isEditForm =
    taskToEdit !== undefined &&
    taskToEdit &&
    Object.keys(taskToEdit).length > 0;

  const formik = useFormik({
    initialValues: {
      title: isEditForm ? taskToEdit.description : '',
      start: isEditForm ? taskToEdit.start : '09:00',
      end: isEditForm ? taskToEdit.end : '09:30',
      priority: isEditForm ? taskToEdit.priority : 'low',
      date: isEditForm ? taskToEdit.date : date,
      category: isEditForm ? taskToEdit.category : category,
    },
    validationSchema: taskFormValidationSchema,

    onSubmit: (values, action) => {
      if (isEditForm) {
        dispatch(editTask({ ...values, id: taskToEdit.id }));
        dispatch(setIsChanged('4754867465347568'));
      } else {
        dispatch(addTask(values));
      }
      action.resetForm();
      toggleModal();
      dispatch(setIsChanged('true'));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TitleWrapper>
        <NameLabel color={color}>Title</NameLabel>
        <Textarea
          type="text"
          name="title"
          rows="5"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter text"
          hasError={!!formik.errors.title && !!formik.touched.title}
          backgroundColor={backgroundColor}
          colorText={colorText}
          colorTextArea={colorTextArea}
          borderColor={borderColor}
        ></Textarea>
      </TitleWrapper>
      {formik.errors.title && formik.touched.title && (
        <ErrorsMessage>{formik.errors.title}</ErrorsMessage>
      )}

      <TimeBox>
        <TimeWrapper>
          <NameLabel color={color}>Start</NameLabel>
          <TimeInput
            type="time"
            name="start"
            value={formik.values.start}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={!!formik.errors.start && !!formik.touched.start}
            color={color}
          />
        </TimeWrapper>
        <TimeWrapper>
          <NameLabel color={color}>End</NameLabel>
          <TimeInput
            type="time"
            name="end"
            value={formik.values.end}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={!!formik.errors.end && !!formik.touched.end}
            color={color}
          />
        </TimeWrapper>
      </TimeBox>
      {formik.errors.start && formik.touched.start && (
        <ErrorsMessage>{formik.errors.start}</ErrorsMessage>
      )}
      {formik.errors.end && formik.touched.end && (
        <ErrorsMessage>{formik.errors.end}</ErrorsMessage>
      )}

      <CheckBoxWrapper>
        <CheckBoxLabel colorText={colorText}>
          <LowInput
            type="radio"
            name="priority"
            value="low"
            checked={formik.values.priority === 'low'}
            onChange={formik.handleChange}
          />
          <span>Low</span>
        </CheckBoxLabel>
        <CheckBoxLabel colorText={colorText}>
          <MediumInput
            type="radio"
            name="priority"
            value="medium"
            checked={formik.values.priority === 'medium'}
            onChange={formik.handleChange}
          />
          <span>Medium</span>
        </CheckBoxLabel>
        <CheckBoxLabel colorText={colorText}>
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
        <ModalButton
          type="submit"
          textColor="#FFFFFF"
          backgroundColor="#3E85F3"
        >
          <EditWrapper>
            {isEditForm ? <BiPencil size={20} /> : <AiOutlinePlus size={22} />}
            <Span>{isEditForm ? 'Edit' : 'Add'}</Span>
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

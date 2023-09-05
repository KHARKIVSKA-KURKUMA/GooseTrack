import { useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { BiPencil } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { editTask, addTask } from 'store/tasks/tasksThunks';

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

const TaskFormForEdit = ({ toggleModal, taskToEdit}) => {
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
      .oneOf(['to-do', 'in progress', 'done'], 'Invalid priority value')
      .required('Select a category'),
  });

  const formik = useFormik({
    initialValues: {
      title: taskToEdit.title,
      start: taskToEdit.start,
      end: taskToEdit.end,
      priority: taskToEdit.priority,
      date: taskToEdit.date,
      category: taskToEdit.category,
    },
    validationSchema: taskFormValidationSchema,

    onSubmit:(values, action) => {
      console.log(values);
        if (taskToEdit && Object.keys(taskToEdit).length > 0) {
            const response = dispatch(editTask({...values, _id: taskToEdit._id}));
        if (response.status >= 200 && response.status < 300) {
          toast.success('Task updated successfully');
        } else {
          toast.error('Oops, something went wrong...');
        }
      } else {
        const response = dispatch(addTask(values));
        if (response.status >= 200 && response.status < 300) {
          toast.success('Task created successfully');
        } else {
          toast.error('Oops, something went wrong...');
        }
        console.log(values);
      }
      action.resetForm();
      toggleModal();
    },
  });



  return (
    <form onSubmit={formik.handleSubmit}>
      <TitleWrapper>
        <NameLabel>Title</NameLabel>
        <Textarea
          type="text"
          name="title"
          rows="5"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter text"
          hasError={!!formik.errors.title && !!formik.touched.title}
        ></Textarea>
      </TitleWrapper>
      {formik.errors.title && formik.touched.title && (
        <ErrorsMessage>{formik.errors.title}</ErrorsMessage>
      )}

      <TimeBox>
        <TimeWrapper>
          <NameLabel>Start</NameLabel>
          <TimeInput
            type="time"
            name="start"
            value={formik.values.start}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={!!formik.errors.start && !!formik.touched.start}
          />
        </TimeWrapper>
        <TimeWrapper>
          <NameLabel>End</NameLabel>
          <TimeInput
            type="time"
            name="end"
            value={formik.values.end}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            hasError={!!formik.errors.end && !!formik.touched.end}
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
        <ModalButton
          type="submit"
          textColor="#FFFFFF"
          backgroundColor="#3E85F3"
        >
          <EditWrapper>
            {taskToEdit && taskToEdit.length > 0 ? (
              <BiPencil size={20} />
            ) : (
              <AiOutlinePlus size={22} />
            )}
            <Span>{taskToEdit && taskToEdit.length > 0 ? 'Edit' : 'Add'}</Span>
          </EditWrapper>
        </ModalButton>
        <ModalButton type="button" onClick={toggleModal}>
          Cancel
        </ModalButton>
      </ButtonWrapper>
    </form>
  );
};

export default TaskFormForEdit;
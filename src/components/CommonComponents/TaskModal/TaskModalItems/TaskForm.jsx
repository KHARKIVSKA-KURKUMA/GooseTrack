import { useFormik } from 'formik';
import * as yup from 'yup';
// import TimePicker from 'react-time-picker';
import React, {useState} from 'react';
import { BiPencil } from 'react-icons/bi';
import ModalButton from 'components/GeneralComponents/ModalButton/ModalButton';
import { Button } from 'components/PageNotFound/PageNotFound.styled';
import { EditWrapper, Span, NameLabel, Textarea } from './TaskForm.styled';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';




const TaskForm = ({ toggleModal, status }) => { 

   /// Validate Feedback form with YUP ///
  const taskFormValidationSchema = yup.object().shape({});

    const formik = useFormik({
      initialValues: {
        selectedTime: '10:00'
      },
      validationSchema: taskFormValidationSchema,
  // const [value, onChange] = useState('10:00');
      onSubmit: (values, action) => {
        console.log(values)
        action.resetForm();
      },
    });

    return (
      <form onSubmit={formik.handleSubmit}>
        <NameLabel>
          Title
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
        </NameLabel>

   <div>
          <label>Selected Time:</label>
          {/* <TimePicker size={100}
            onChange={time => formik.setFieldValue('selectedTime', time)}
            value={formik.values.selectedTime}
            clearIcon={null}
          /> */}
        </div>
        <div>
          <label>Start</label>

        </div>
        <div>
          <label>End</label>
        
  </div>
        <ModalButton textColor="#FFFFFF" backgroundColor="#3E85F3">
          <EditWrapper>
            <BiPencil size={20} /> <Span>Edit</Span>
          </EditWrapper>
        </ModalButton>
        <ModalButton type="button" onClick={toggleModal}>
          <EditWrapper>
            <BiPencil size={20} color={'transparent'} /> <Span>Cancel</Span>
          </EditWrapper>
        </ModalButton>
      </form>
    );
  };




 
export default TaskForm;


// import { Stack, TextField} from '@mui/material';
// import {TimePicker } from '@mui/lab';

//   const [startTime, setStartTime] = useState < Time | null > (null)
//   console.log({ startTime });
//   return (
//     <Stack spacing={4} sx={{ width: '25px' }}>
//       <TimePicker
//         label='Start'
//         renderInput={(params) => <TextField {...params} />}
//         value={startTime}
//         onChange={(newValue) => {
//           setStartTime(newValue)
//         }}
//      />
// </Stack>
//   )
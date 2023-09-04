import { Formik } from 'formik';

import { FcHome } from 'react-icons/fc';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

// import RegisterSuccessModal from '../RegisterSuccessModal/RegisterSuccessModal'
// // import { Container } from './RegisterForm.styled';

import {
  Container,
  StyledBtn,
  StyledFiLogIn,
  StyledForm,
  StyledFormTitle,
  StyledTextBtn,
} from './../../LoginPageComponents/LoginForm/LoginForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { register } from 'store/auth/authOperations';
import { selectorError } from 'store/auth/authSelectors';
import { AuthField } from 'components/UnauthorizedUserComponents/LoginPageComponents/AuthField/AuthField';

const RegisterForm = () => {
  const [isModalRegister, setIsModalRegister] = useState(false);

  // const toggleModalRegister = () => {
  //   setIsModalRegister((prev)=> !prev)
  // }

  const dispatch = useDispatch();
  const errorMsg = useSelector(selectorError);
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  // const REACT_APP_API_URL = 'https://goosetrack-tj84.onrender.com';

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is a required field'),
    email: yup
      .string()
      .email('Email must be valid email')
      .required('Email is a required field'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(16, 'Password must be at most 16 characters')
      .required('Password is a required field'),
  });
  const handleSubmit = async (values, actions) => {
    await dispatch(register(values));
    const error = await errorMsg.message;
    if (!error.message) {
      setIsModalRegister(!isModalRegister);
      // toast.success('okay')
      return;
    }

    actions.resetForm();
  };

  return (
    <Container>
      <NavLink to="/">
        <FcHome
          style={{ marginTop: 0, marginBottom: 4, width: 20, height: 20 }}
        />
      </NavLink>
      <StyledFormTitle>Sign Up</StyledFormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, dirty, touched, errors }) => (
          <StyledForm autoComplete="off">
            <AuthField
              title="Name"
              type="text"
              name="name"
              touched={touched.name}
              errors={errors.name}
              placeholder={'Enter your name'}
            />
            <AuthField
              title="Email"
              type="email"
              name="email"
              touched={touched.email}
              errors={errors.email}
              placeholder="Enter email"
            />
            <AuthField
              title="Password"
              type="password"
              name="password"
              touched={touched.password}
              errors={errors.password}
              placeholder="Enter password"
            />

            <StyledBtn disabled={!dirty} type="submit">
              <StyledTextBtn>Sign Up</StyledTextBtn>
              <StyledFiLogIn />
            </StyledBtn>
          </StyledForm>
        )}
      </Formik>

      {/* <RegisterSuccessModal isModalRegister={isModalRegister} toggleModalRegister={ toggleModalRegister } /> */}
    </Container>
  );
};

export default RegisterForm;

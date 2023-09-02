import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import { FcHome } from 'react-icons/fc';
import { toast, ToastContainer } from 'react-toastify';

import {
  Container,
  StyledBtn,
  StyledFiLogIn,
  StyledField,
  StyledForm,
  StyledFormTitle,
  StyledLabel,
  StyledTextBtn,
} from './LoginForm.styled';
import { NavLink } from 'react-router-dom';
/* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import {  selectAccessToken, selectorError, selectorIsLogin, selectorToken } from 'store/auth/authSelectors';
import { login } from 'store/auth/authOperations';
import { useEffect, useState } from 'react';
import VisibleButton from 'components/UnauthorizedUserComponents/VisibleButton/VisibleButton';
// import { useEffect } from 'react';

const initialValues = {
  email: '',
  password: '',
};



// const REACT_APP_API_URL = 'https://goosetrack-tj84.onrender.com';

const LoginForm = () => {
  const [visiblePassword, setVisiblePassword] = useState(false)
  const errorMsg = useSelector(selectorError);
  const dispatch = useDispatch();

  // const token = useSelector(selectAccessToken);
  // setAuthHeader(token);
  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [token, dispatch]);
// const emailRegexp = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(
         'Email must be valid email'
        )
      .required(
         'Email is a required field'
      ),
    password: yup
      .string()
      .min(
        8,
         'Password must be at least 8 characters'
      )
      .max(
        16,
           'Password must be at most 16 characters'
      )
      .required(
           'Password is a required field'
      ),
  });

  const handleSubmit =  (values, actions) => {
    dispatch(login(values));
    if (!errorMsg?.message) {
      return
    }

    console.log(errorMsg.message);
    toast.warn(`${errorMsg.message}`, {
      position: toast.POSITION.BOTTOM_LEFT
    });
        // actions.resetForm();
  };


  const hendleVisible = () => {
    setVisiblePassword(prev => !prev)
  }

  return (
    <Container>
      <NavLink to="/">
        <FcHome
          style={{ marginTop: 0, marginBottom: 4, width: 20, height: 20 }}
        />
      </NavLink>
      <StyledFormTitle>Log In</StyledFormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm autoComplete="off">
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledField placeholder="Enter email" type="text" name="email" />
          <ErrorMessage name="email" />
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledField
            placeholder="Enter password"
            type={visiblePassword ? 'text':'password'}
            name="password"
          />
          <ErrorMessage name="password" />
          {/* <VisibleButton hendleVisible={hendleVisible} isVisible={visiblePassword} /> */}
          <StyledBtn type="submit">
            <StyledTextBtn>Log in</StyledTextBtn>
            <StyledFiLogIn />
          </StyledBtn>
          {/* <a href={`${REACT_APP_API_URL}/auth/google`}>Login with Google</a> */}
        </StyledForm>
        <VisibleButton/>
      </Formik>
      <ToastContainer />
    </Container>
  );
};

export default LoginForm;

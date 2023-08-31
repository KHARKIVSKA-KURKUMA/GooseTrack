import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import { FcHome } from 'react-icons/fc';


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
import { useDispatch, useSelector } from 'react-redux';
import {  selectorIsLogin, selectorToken } from 'store/auth/authSelectors';
import { login } from 'store/auth/authOperations';
// import { useEffect } from 'react';

const initialValues = {
  email: '',
  password: '',
};



const REACT_APP_API_URL = 'https://goosetrack-tj84.onrender.com';

const LoginForm = () => {
  const dispatch = useDispatch();

  const auth = useSelector(selectorIsLogin);
  const token = useSelector(selectorToken)
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

    console.log(values);
    console.log(actions);
    console.log('auth>>>>', auth);
    console.log(token)
    // actions.resetForm();
    dispatch(login(values));
  };
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
          <ErrorMessage name="password" />
          <StyledField
            placeholder="Enter password"
            type="password"
            name="password"
          />

          <StyledBtn type="submit">
            <StyledTextBtn>Log in</StyledTextBtn>
            <StyledFiLogIn />
          </StyledBtn>
          <a href={`${REACT_APP_API_URL}/auth/google`}>Login with Google</a>
        </StyledForm>
      </Formik>
    </Container>
  );
};

export default LoginForm;

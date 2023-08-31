import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import { FcHome } from 'react-icons/fc';

// import { Container } from './RegisterForm.styled';

import {
  Container,
  StyledBtn,
  StyledFiLogIn,
  StyledField,
  StyledForm,
  StyledFormTitle,
  StyledLabel,
  StyledTextBtn,
} from './../../LoginPageComponents/LoginForm/LoginForm.styled';
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { register } from 'store/auth/authOperations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const REACT_APP_API_URL = 'https://goosetrack-tj84.onrender.com';

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required(
         'Name is a required field'
      ),
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
  const handleSubmit = async (values, actions) => {
    // console.log(values);
    // console.log(actions);

    dispatch(register(values))
    actions.resetForm();
  };

  return (
    <Container>
      <NavLink to="/">
        <FcHome style={{ marginTop: 0, marginBottom: 4, width: 20, height: 20 }} />
      </NavLink>
      <StyledFormTitle>Sign Up</StyledFormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm autoComplete="off">
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledField placeholder="Enter your" type="text" name="name" />
          <ErrorMessage name='name'/>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledField placeholder="Enter email" type="text" name="email" />
          <ErrorMessage name='email'/>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledField
            placeholder="Enter password"
            type="password"
            name="password"
          />
          <ErrorMessage name='password'/>
          <StyledBtn type="submit">
            <StyledTextBtn>Sign Up</StyledTextBtn>
            <StyledFiLogIn />
          </StyledBtn>
          <a href={`${REACT_APP_API_URL}/auth/google`}>Login with Google</a>
        </StyledForm>
      </Formik>
    </Container>
  );
};

export default RegisterForm;

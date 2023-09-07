import { Formik } from 'formik';
import * as yup from 'yup';
import { FcHome } from 'react-icons/fc';

import {
  Container,
  StyledBtn,
  StyledFiLogIn,
  StyledForm,
  StyledFormTitle,
  StyledTextBtn,
} from './LoginForm.styled';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectorError } from 'store/auth/authSelectors';
import { login } from 'store/auth/authOperations';
import { AuthField } from '../AuthField/AuthField';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const errorMsg = useSelector(selectorError);
  const dispatch = useDispatch();

  const validationSchema = yup.object().shape({
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
    await dispatch(login(values));
    if (!errorMsg?.message) {
      return;
    }
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
        {({ values, dirty, touched, errors }) => (
          <StyledForm autoComplete="off">
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
            <StyledBtn type="submit">
              <StyledTextBtn>Log in</StyledTextBtn>
              <StyledFiLogIn />
            </StyledBtn>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;

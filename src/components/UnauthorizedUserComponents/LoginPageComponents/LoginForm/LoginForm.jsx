import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import { Container, StyledField, StyledForm, StyledFormTitle, ss } from './LoginForm.styled';

const initialValues = {
    email: '',
    password: '',
}
const LoginForm = () => {

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


  const handleSubmit = (values, actions) => {
    // e.preventDefault();
    console.log(values);
    console.log(actions);
    actions.resetForm();
  }

  return (
    <Container>
      <StyledFormTitle>
            Log In
      </StyledFormTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <StyledForm autoComplete='off'>
          <label htmlFor="email">
            email
          </label>
          <StyledField placeholder="email" type="text" name='email'/>
          <label htmlFor="email">
            password
          </label>
          <StyledField placeholder="password" type="password" name='password' />
          
          <button type='submit'>Log in</button>
        </StyledForm>
      </Formik>
    </Container>
  );
};

export default LoginForm;

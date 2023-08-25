import AuthNavigate from 'components/UnauthorizedUserComponents/AuthNavigate';
import RegisterForm from 'components/UnauthorizedUserComponents/RegisterPageComponents/RegisterForm';

import { Container } from '../LoginPage/LoginPageStyled.styled';

const RegisterPage = () => {
  return (
    <Container>
      <RegisterForm />
      <AuthNavigate />
    </Container>
  );
};

export default RegisterPage;

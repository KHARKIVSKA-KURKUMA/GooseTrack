import AuthNavigate from 'components/UnauthorizedUserComponents/AuthNavigate';
import LoginForm from 'components/UnauthorizedUserComponents/LoginPageComponents/LoginForm';
import { Container } from './LoginPageStyled.styled';

const LoginPage = () => {
  return (
    <Container>
      <LoginForm />
      <AuthNavigate />
    </Container>
  );
};

export default LoginPage;

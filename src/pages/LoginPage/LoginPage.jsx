import AuthNavigate from 'components/UnauthorizedUserComponents/AuthNavigate';
import LoginForm from 'components/UnauthorizedUserComponents/LoginPageComponents/LoginForm';

const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <AuthNavigate />
    </>
  );
};

export default LoginPage;

import AuthNavigate from 'components/UnauthorizedUserComponents/AuthNavigate/AuthNavigate';
import LoginForm from 'components/UnauthorizedUserComponents/LoginPageComponents/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <AuthNavigate />
    </>
  );
};

export default LoginPage;

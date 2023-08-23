import AuthNavigate from 'components/UnauthorizedUserComponents/AuthNavigate/AuthNavigate';
import RegisterForm from 'components/UnauthorizedUserComponents/RegisterPageComponents/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <>
      <RegisterForm />
      <AuthNavigate />
    </>
  );
};

export default RegisterPage;

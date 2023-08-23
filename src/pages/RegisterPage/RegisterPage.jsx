import AuthNavigate from 'components/UnauthorizedUserComponents/AuthNavigate';
import RegisterForm from 'components/UnauthorizedUserComponents/RegisterPageComponents/RegisterForm';

const RegisterPage = () => {
  return (
    <>
      <RegisterForm />
      <AuthNavigate />
    </>
  );
};

export default RegisterPage;

import AuthNavigate from 'components/UnauthorizedUserComponents/AuthNavigate';
import RegisterForm from 'components/UnauthorizedUserComponents/RegisterPageComponents/RegisterForm';
import PageLayout from '../../components/PageLayout/PageLayout';

const RegisterPage = () => {
  return (
    <PageLayout>
      <RegisterForm />
      <AuthNavigate />
    </PageLayout>
  );
};

export default RegisterPage;

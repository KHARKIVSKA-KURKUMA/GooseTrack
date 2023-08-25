import AuthNavigate from 'components/UnauthorizedUserComponents/AuthNavigate';
import LoginForm from 'components/UnauthorizedUserComponents/LoginPageComponents/LoginForm';
import PageLayout from '../../components/PageLayout/PageLayout'

const LoginPage = () => {
  return (
    <PageLayout>
      <LoginForm />
      <AuthNavigate />
    </PageLayout>
  );
};

export default LoginPage;

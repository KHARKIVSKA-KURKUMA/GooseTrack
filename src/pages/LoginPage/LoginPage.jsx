import AuthNavigate from 'components/UnauthorizedUserComponents/AuthNavigate';
import LoginForm from 'components/UnauthorizedUserComponents/LoginPageComponents/LoginForm';
import PageLayout from '../../components/PageLayout/PageLayout';
import SectionAuth from 'components/UnauthorizedUserComponents/LoginPageComponents/SectionLogin/SectionAuth';

const LoginPage = () => {
  return (
    <SectionAuth>
      <PageLayout>
        <LoginForm />
        <AuthNavigate />
      </PageLayout>
    </SectionAuth>
  );
};

export default LoginPage;

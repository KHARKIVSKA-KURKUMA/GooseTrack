import AuthNavigate from 'components/UnauthorizedUserComponents/AuthNavigate';
import RegisterForm from 'components/UnauthorizedUserComponents/RegisterPageComponents/RegisterForm';
import PageLayout from '../../components/PageLayout/PageLayout';
import SectionAuth from 'components/UnauthorizedUserComponents/LoginPageComponents/SectionLogin/SectionAuth';

const RegisterPage = () => {
  return (
    <SectionAuth>
      <PageLayout>
        <RegisterForm />
        <AuthNavigate />
    </PageLayout>
    </SectionAuth>
  );
};

export default RegisterPage;

import AuthNavigate from 'components/UnauthorizedUserComponents/AuthNavigate';
import RegisterForm from 'components/UnauthorizedUserComponents/RegisterPageComponents/RegisterForm';
import PageLayout from '../../components/PageLayout/PageLayout'

import { Container } from '../LoginPage/LoginPageStyled.styled';

const RegisterPage = () => {
  return (

    <PageLayout>
      <RegisterForm />
      <AuthNavigate />
    </PageLayout>

  );
};

export default RegisterPage;

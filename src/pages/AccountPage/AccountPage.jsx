import UserForm from 'components/AuthorizedUserComponents/AccountPageComponents/UserForm/UserForm';
import MainLayout from 'components/AuthorizedUserComponents/MainLayout/MainLayout';
import PageLayout from '../../components/PageLayout/PageLayout';

const AccountPage = () => {
  return (
    <PageLayout>
      <MainLayout />
      <UserForm />
    </PageLayout>
  );
};

export default AccountPage;

import { Container } from './Header.styled';
import {
  AddFeedbackBtn,
  AddFeedbackModal,
  ThemeToggler,
  UserInfo,
} from './HeaderItems';

const Header = () => {
  return (
    <Container>
      <AddFeedbackBtn />
      <ThemeToggler />
      <UserInfo />
      <AddFeedbackModal />
    </Container>
  );
};

export default Header;

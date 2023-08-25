import { Container } from './Header.styled';
import { AddFeedbackBtn, ThemeToggler, UserInfo } from './HeaderItems';

const Header = () => {
  return (
    <Container>
      <AddFeedbackBtn />
      <ThemeToggler />
      <UserInfo />
    </Container>
  );
};

export default Header;

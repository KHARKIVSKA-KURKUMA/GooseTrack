import { Container, HeaderTitle } from './Header.styled';
import { AddFeedbackBtn, ThemeToggler, UserInfo } from './HeaderItems';
import { useLocation } from 'react-router-dom';


const Header = ({ theme, toggleTheme }) => {
    const location = useLocation();

  let pageTitle = 'User Profile';

  if (location.pathname === '/calendar') {
    pageTitle = 'Calendar';
  } else if (location.pathname === '/account') {
    pageTitle = 'User Profile';
  } else if (location.pathname === '/statistics') {
    pageTitle = 'Statistics';
  }
   const userName = 'Oleksandr';
  const hasAvatar = false;
  return (
    <Container>
      <HeaderTitle>{pageTitle}</HeaderTitle>
      <AddFeedbackBtn />
      <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
      <UserInfo userName={userName} avatarUrl={hasAvatar} />
    </Container>
  );
};

export default Header;

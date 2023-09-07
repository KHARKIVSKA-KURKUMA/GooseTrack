import { Container, HeaderTitleContainer, HeaderTitle } from './Header.styled';
import { AddFeedbackBtn, ThemeToggler, UserInfo } from './HeaderItems';
import { useLocation } from 'react-router-dom';
import BurgerToggleContainer from '../SideBar/SideBarItems/BurgerMenu/BurgerToggleContainer';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/user/selectors';
import { fetchCurrentUser } from 'store/user/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { darkTheme, lightTheme } from './HeaderItems/Theme/theme';
import { selectorToken } from 'store/auth/authSelectors';

const Header = ({ toggleTheme, showBurgerMenu, handleBurgerToggleClick }) => {
  const location = useLocation();
  const {accessToken} = useSelector(selectorToken);
  let pageTitle = 'User Profile';
  if (location.pathname.includes('calendar')) {
    pageTitle = 'Calendar';
  } else if (location.pathname === '/account') {
    pageTitle = 'User Profile';
  } else if (location.pathname === '/statistics') {
    pageTitle = 'Statistics';
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch, accessToken]);
  const user = useSelector(selectUser);
  const { name, avatarURL } = user;

  const theme = useSelector(state => state.theme);
  // const theme = useSelector(selectTheme);

  const lightThemeText = lightTheme.text;
  const darkThemeText = darkTheme.text;

  const pageTitleColor = theme === 'light' ? lightThemeText : darkThemeText;

  return (
    <Container>
      <HeaderTitleContainer>
        <HeaderTitle style={{ color: pageTitleColor }}>{pageTitle}</HeaderTitle>
      </HeaderTitleContainer>
      <BurgerToggleContainer
        showBurgerMenu={showBurgerMenu}
        setShowBurgerMenu={handleBurgerToggleClick}
      />
      <AddFeedbackBtn />
      <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
      <UserInfo userName={name} avatarUrl={avatarURL} />
    </Container>
  );
};

export default Header;

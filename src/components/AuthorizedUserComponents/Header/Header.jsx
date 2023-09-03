import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { Container, HeaderTitleContainer, HeaderTitle } from './Header.styled';
import { AddFeedbackBtn, ThemeToggler, UserInfo } from './HeaderItems';
import { useLocation } from 'react-router-dom';
import BurgerToggleContainer from '../SideBar/SideBarItems/BurgerMenu/BurgerToggleContainer';
import { lightTheme, darkTheme } from '../Header/HeaderItems/Theme/theme';
import { toggleTheme } from '../Header/HeaderItems/Theme/themeSlice';

const Header = ({ showBurgerMenu, handleBurgerToggleClick }) => {
  const theme = useSelector((state) => state.theme); 
  const dispatch = useDispatch();

  const location = useLocation();
  let pageTitle = 'User Profile';
  if (location.pathname === '/calendar') {
    pageTitle = 'Calendar';
  } else if (location.pathname === '/account') {
    pageTitle = 'User Profile';
  } else if (location.pathname === '/statistics') {
    pageTitle = 'Statistics';
  }
  const lightThemeText = lightTheme.text;
  const darkThemeText = darkTheme.text;

  const pageTitleColor = theme === 'light' ? lightThemeText : darkThemeText;
  const userName = 'Goose';
  const hasAvatar = false;

  const toggleThemeHandler = () => {
        dispatch(toggleTheme());
  };

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
      <ThemeToggler theme={theme} toggleTheme={toggleThemeHandler} />
      <UserInfo userName={userName} avatarUrl={hasAvatar} />
    </Container>
  );
};

export default Header;

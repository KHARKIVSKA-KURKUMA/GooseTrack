import { useEffect, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { lightTheme, darkTheme } from '../Header/HeaderItems/Theme/theme';
import { toggleTheme } from '../Header/HeaderItems/Theme/themeSlice';
import useMediaQuery from '@mui/material/useMediaQuery';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
   
    
  }
`;

const MainLayout = () => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1440px)');

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (isDesktop) {
      setShowBurgerMenu(true);
    }
  }, [isDesktop]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Header
          theme={theme}
          toggleTheme={toggleThemeHandler}
          showBurgerMenu={showBurgerMenu}
          handleBurgerToggleClick={() => setShowBurgerMenu(!showBurgerMenu)}
        />
        <SideBar
          showBurgerMenu={showBurgerMenu}
          handleSidebarClick={() => setShowBurgerMenu(false)}
        />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;

import { useEffect, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { lightTheme, darkTheme } from '../Header/HeaderItems/Theme/theme';
import useMediaQuery from '@mui/material/useMediaQuery';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
    
  }
`;

const MainLayout = () => {
  const [theme, setTheme] = useState('light');
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1440px)');
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  const handleBurgerToggleClick = () => {
    setShowBurgerMenu(prevShowBurgerMenu => !prevShowBurgerMenu);
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
          toggleTheme={toggleTheme}
          showBurgerMenu={showBurgerMenu}
          handleBurgerToggleClick={handleBurgerToggleClick}
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

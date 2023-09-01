import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import { lightTheme, darkTheme } from '../Header/HeaderItems/Theme/theme';

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

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  const handleBurgerToggleClick = () => {
    setShowBurgerMenu(prevShowBurgerMenu => !prevShowBurgerMenu);
  };

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

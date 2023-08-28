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

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <SideBar />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;

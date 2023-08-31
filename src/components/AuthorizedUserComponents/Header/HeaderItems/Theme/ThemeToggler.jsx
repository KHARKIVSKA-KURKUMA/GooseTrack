import React from 'react';
import styled from 'styled-components';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#3e85f3')};
  width: 26px;
  height: 26px;
  padding: 0;
  margin-left: 24px;
`;

const ThemeToggler = ({ theme, toggleTheme }) => {
  return (
    <ToggleButton type="button" onClick={toggleTheme}>
      {theme === 'dark' ? <RiSunLine /> : <RiMoonLine />}
    </ToggleButton>
  );
};

export default ThemeToggler;

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
const Sun = styled(RiSunLine)`
  width: 24px;
  height: 24px;
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
const Moon = styled(RiMoonLine)`
  width: 24px;
  height: 24px;
  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const ThemeToggler = ({ theme, toggleTheme }) => {
  return (
    <ToggleButton type="button" onClick={toggleTheme}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </ToggleButton>
  );
};

export default ThemeToggler;

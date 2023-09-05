import React from 'react';
import styled from 'styled-components';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './themeSlice';

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

const ThemeToggler = () => {
  const theme = useSelector(state => state.theme);
  // const theme = useSelector(selectTheme);

  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <ToggleButton type="button" onClick={handleThemeToggle}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </ToggleButton>
  );
};
export default ThemeToggler;

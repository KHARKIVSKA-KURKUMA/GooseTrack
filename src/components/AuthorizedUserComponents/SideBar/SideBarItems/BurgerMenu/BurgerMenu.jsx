import React from 'react';
import {
  BurgerMenuContainer,
  BurgerMenuItem,
} from '../BurgerMenu/BurgerMenu.styled';

const BurgerMenu = () => {
  return (
    <BurgerMenuContainer>
      <BurgerMenuItem to="/account">MyAccount</BurgerMenuItem>
      <BurgerMenuItem to="/calendar">Calendar</BurgerMenuItem>
      <BurgerMenuItem to="/statistics">Statistics</BurgerMenuItem>
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;

import React from 'react';
import { BurgerToggle } from '../../../Header/Header.styled';

const BurgerToggleContainer = ({ showBurgerMenu, setShowBurgerMenu }) => {
  const toggleBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  return (
    <BurgerToggle onClick={toggleBurgerMenu}>
      <div />
      <div />
      <div />
    </BurgerToggle>
  );
};

export default BurgerToggleContainer;

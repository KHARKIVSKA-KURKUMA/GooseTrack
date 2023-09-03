import styled from 'styled-components';
import { BurgerToggle } from '../../../Header/Header.styled';
import { AiOutlineMenu } from 'react-icons/ai';

const Menu = styled(AiOutlineMenu)`
  width: 24px;
  height: 24px;
  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;

const BurgerToggleContainer = ({ showBurgerMenu, setShowBurgerMenu }) => {
  const toggleBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  return (
    <BurgerToggle onClick={toggleBurgerMenu}>
      <Menu />
    </BurgerToggle>
  );
};

export default BurgerToggleContainer;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BurgerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  padding: 20px;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
`;

export const BurgerMenuItem = styled(NavLink)`
  color: ${({ theme }) => theme.textSidebar};
  text-decoration: none;
  font-size: 18px;
  padding: 10px 0;
  transition: color 0.2s;

  &:hover {
    color: #007bff;
  }
`;

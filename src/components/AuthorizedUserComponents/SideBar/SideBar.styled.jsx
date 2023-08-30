import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BurgerToggle = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  div {
    width: 30px;
    height: 3px;
    background-color: ${({ theme }) => theme.textSidebar};
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SidebarContainer = styled.div`
  width: 289px;
  background: ${({ theme }) => theme.sidebarBackground};
  height: 100vh;
  transform: translateY(-116px);
  padding-top: 20px;
  @media (max-width: 768px) {
    ${BurgerToggle} {
      display: ${({ showBurgerMenu }) => (showBurgerMenu ? 'block' : 'none')};
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  font-size: 24px;
  font-weight: bold;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textSidebar};
  text-decoration: none;
  padding: 8px 0;
  transition: color 0.2s;
  margin-left: 8px;

  &:hover {
    color: #007bff;
    background-color: #e3f3ff;
    border-radius: 8px;
  }
`;

export const LogoutBtn = styled.button`
  background-color: #3e85f3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 15px;
  margin-right: 20px;
  cursor: pointer;
  margin-left: 24px;
  display: flex;
  align-items: center;
`;

export const LogoutTitle = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-right: 11px;
`;

export const NavTitle = styled.h2`
  color: ${({ theme }) => theme.textSidebar};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 24px;
`;
export const LogoTitle = styled.h2`
  color: #3e85f3;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  margin-left: 10px;
`;
export const StyledText = styled.span`
  color: #3e85f3;
  font-family: Inter;
  font-size: 24px;
  font-style: italic;
  font-weight: 700;
  line-height: 24px;
  margin-right: 1px;
  margin-left: -2px;
`;

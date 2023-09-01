import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.div`
  width: 289px;
  background: ${({ theme }) => theme.sidebarBackground};
  height: 100vh;
  transform: translateY(-116px);
  padding-top: 20px;
  z-index: 9999;

  @media (max-width: 768px) {
    display: ${({ showBurgerMenu }) => (showBurgerMenu ? 'flex' : 'none')};
    transform: translateY(-33px);
    flex-direction: column;
    position: fixed;
    width: 289px;
    height: 100vh;
    top: 0;
    left: 0;
  }
`;
export const CloseButtonContainer = styled.div`
  position: absolute;
  top: 58px;
  right: 32px;
  z-index: 9999;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  font-size: 24px;
  font-weight: bold;
  @media (max-width: 768px) {
    width: 60px;
    height: 58px;
    padding: 50px 40px 50px 20px;
  }
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
  padding: 8px 5px;
  transition: color 0.2s;
  margin-left: 8px;

  &:hover {
    color: #007bff;
    background-color: #e3f3ff;
    border-radius: 8px;
    padding-left: 5px ;
  }
`;

export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: #3e85f3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 15px;
  margin-top: 350px;
  margin-bottom: 24px;
  margin-right: 124px;
  margin-left: 24px;
  cursor: pointer;
  margin-left: 24px;
  @media (max-width: 768px) {
    margin-top: 460px;
    margin-bottom: 24px;
    margin-right: 116px;
    margin-left: 32px;
  }
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
  @media (max-width: 768px) {
    font-size: 16px;
  }
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
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Close } from '../../../../src/img/close.svg';

export const SidebarContainer = styled.div`
  display: 'flex';
  flex-direction: column;
  width: 225px;
  background: ${({ theme }) => theme.sidebarBackground};
  height: 100vh;
  top: 0;
  left: ${({ showBurgerMenu }) => (showBurgerMenu ? '0' : '-100%')};
  padding: 24px 20px;
  position: fixed;
  z-index: 9;
  transition: left 0.3s ease-in-out 0s;
  @media (min-width: 768px) {
    padding: 24px 32px;
    width: 289px;
  }
  @media (min-width: 1440px) {
    padding: 32px 43px 24px 24px;
  }
`;
export const CloseIcon = styled(Close)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;
export const CloseButtonContainer = styled.div`
  position: absolute;
  right: 20px;
  padding: 1px 0;
  z-index: 9999;
  top: 28px;
  svg path {
    stroke: ${({ theme }) => theme.text};
  }
  @media (min-width: 768px) {
    padding: 0;
    right: 32px;
    top: 36px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  img {
    max-width: 36px;
    max-height: 35px;
  }
  @media (min-width: 768px) {
    img {
      max-width: 60px;
      max-height: 58px;
    }
  }
  @media (min-width: 1440px) {
    img {
      max-width: 71px;
      max-height: 68px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textSidebar};
  text-decoration: none;
  font-family: Inter;
  font-size: 14px;
  gap: 8px;
  font-weight: 600;
  transition: color 0.2s;
  padding: 10px 0 10px 14px;
  border-radius: 8px;

  &:last-child {
    path {
      fill: ${({ theme }) => theme.textSidebar};
      stroke: none;
    }
  }
  svg path {
    stroke: ${({ theme }) => theme.textSidebar};
    fill: none;
  }

  &:hover {
    color: #007bff;
    background-color: #e3f3ff;
    &:last-child {
      path {
        fill: #007bff;
        stroke: none;
      }
    }
    & path {
      stroke: #007bff;
    }
  }
  &.active {
    color: #007bff;
    background-color: #e3f3ff;
    &:last-child {
      path {
        fill: #007bff;
        stroke: none;
      }
    }
    & path {
      stroke: #007bff;
    }
  }
  @media (min-width: 768px) {
    padding: 18px 0 18px 20px;
    gap: 10px;
    font-size: 16px;
  }
`;

export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: #3e85f3;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 15px;
  position: absolute;
  bottom: 24px;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: var(--hover-color);
  }

  @media (min-width: 768px) {
  }
`;

export const LogoutTitle = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -2%;
  margin-right: 11px;
`;

export const NavTitle = styled.h2`
  color: ${({ theme }) => theme.textSidebar};
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  margin-top: 64px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 14px;
    margin-top: 50px;
    margin-bottom: 32px;
  }
  @media (min-width: 1440px) {
    margin: 32px 0;
  }
`;
export const LogoTitle = styled.h2`
  color: #3e85f3;
  font-family: Inter;
  font-weight: 700;
  line-height: 24px;
  font-size: 16px;
  margin-left: 10px;
  @media (min-width: 768px) {
    margin-left: 6px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const StyledText = styled.span`
  color: #3e85f3;
  font-family: Inter;
  font-size: 16px;
  font-style: italic;
  font-weight: 700;
  line-height: 24px;
  margin-right: 2px;
  margin-left: -1px;
  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

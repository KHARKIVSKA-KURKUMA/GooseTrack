import React from 'react';
import goose1x from '../../../img/desktop/goose1x.png';
import goose2x from '../../../img/desktop/goose1x.png';
import goose3x from '../../../img/desktop/goose1x.png';
import {
  SidebarContainer,
  Logo,
  Nav,
  NavLinkStyled,
  LogoutBtn,
  LogoutTitle,
  NavTitle,
  LogoTitle,
  StyledText,
  CloseButtonContainer,
} from './SideBar.styled';
import {
  MyAccountSVG,
  CalendarSVG,
  StatisticsSVG,
  LogoutSVG,
  CloseIconSVG,
} from '../SideBar/SideBarItems/SvgSideBar';
import BurgerMenu from '../SideBar/SideBarItems/BurgerMenu/BurgerMenu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch } from 'react-redux';
import { logout } from 'store/auth/authOperations';

const Sidebar = ({ showBurgerMenu, handleSidebarClick }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const dispatch = useDispatch();

  return (
    <SidebarContainer showBurgerMenu={showBurgerMenu}>
      <Logo>
        <img
          src={goose1x}
          srcSet={`${goose1x} 1x, ${goose2x} 2x, ${goose3x} 3x`}
          alt="My App Logo"
          width="71"
          height="68"
          style={{ maxWidth: 'none', maxHeight: 'none' }}
        />
        <LogoTitle>
          G<StyledText>oo</StyledText>seTrack
        </LogoTitle>
      </Logo>
      <NavTitle>User Panel</NavTitle>
      <Nav>
        <NavLinkStyled to="/account">
          <MyAccountSVG />
          <span style={{ marginLeft: '10px' }}>MyAccount</span>
        </NavLinkStyled>
        <NavLinkStyled to="/calendar">
          <CalendarSVG />
          <span style={{ marginLeft: '10px' }}>Calendar</span>
        </NavLinkStyled>
        <NavLinkStyled to="/statistics">
          <StatisticsSVG />
          <span style={{ marginLeft: '10px' }}>Statistics</span>
        </NavLinkStyled>
      </Nav>
      <LogoutBtn
        onClick={() => {
          dispatch(logout());
          console.log('click');
        }}
        type="button"
      >
        <LogoutTitle>Log out</LogoutTitle>
        <LogoutSVG />
      </LogoutBtn>
      {showBurgerMenu && <BurgerMenu />}
      {isMobile && (
        <CloseButtonContainer onClick={handleSidebarClick}>
          <CloseIconSVG
            onClick={handleSidebarClick}
            style={{
              cursor: 'pointer',
            }}
          />
        </CloseButtonContainer>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;

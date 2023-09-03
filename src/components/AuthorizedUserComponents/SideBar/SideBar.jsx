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
  CloseIcon,
} from './SideBar.styled';
import {
  MyAccountSVG,
  CalendarSVG,
  StatisticsSVG,
  LogoutSVG,
} from '../SideBar/SideBarItems/SvgSideBar';
import BurgerMenu from '../SideBar/SideBarItems/BurgerMenu/BurgerMenu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'store/auth/authOperations';
import { selectedDateSelector } from 'store/selectors';

const Sidebar = ({ showBurgerMenu, handleSidebarClick }) => {
  const isMobile = useMediaQuery('(min-width: 1440px)');
  const currentDay = useSelector(selectedDateSelector);
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
        />
        <LogoTitle>
          G<StyledText>oo</StyledText>seTrack
        </LogoTitle>
      </Logo>
      <NavTitle>User Panel</NavTitle>
      <Nav>
        <NavLinkStyled to="/account">
          <MyAccountSVG />
          <span>My account</span>
        </NavLinkStyled>
        <NavLinkStyled to={`/calendar/month/${currentDay}`}>
          <CalendarSVG />
          <span>Calendar</span>
        </NavLinkStyled>
        <NavLinkStyled to="/statistics">
          <StatisticsSVG />
          <span>Statistics</span>
        </NavLinkStyled>
      </Nav>
      <LogoutBtn
        onClick={() => {
          dispatch(logout());
        }}
        type="button"
      >
        <LogoutTitle>Log out</LogoutTitle>
        <LogoutSVG />
      </LogoutBtn>
      {showBurgerMenu && <BurgerMenu />}
      {!isMobile && (
        <CloseButtonContainer onClick={handleSidebarClick}>
          <CloseIcon />
        </CloseButtonContainer>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;

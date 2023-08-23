import { Container } from './SideBar.styled';
import { LogoutBtn, UserNav } from './SideBarItems';

const SideBar = () => {
  return (
    <Container>
      <UserNav />
      <LogoutBtn />
    </Container>
  );
};

export default SideBar;

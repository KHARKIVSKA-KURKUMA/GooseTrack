import { useLocation } from 'react-router-dom';

import { Container, StyledNavLink } from './AuthNavigate.styled';

const AuthNavigate = () => {
  const location = useLocation();

  const navText = location.pathname === '/login' ? 'Sign up' : 'Log in';
  const navLink = location.pathname === '/login' ? '/register' : '/login';

  return (
    <Container>
      <StyledNavLink to={navLink}>{navText}</StyledNavLink>
    </Container>
  );
};

export default AuthNavigate;

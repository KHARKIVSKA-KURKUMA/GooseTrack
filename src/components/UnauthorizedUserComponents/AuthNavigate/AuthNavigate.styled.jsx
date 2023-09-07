import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
`;

const StyledNavLink = styled(NavLink)`
  color: var(--title-color);
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 117%; /* 116.667% */
  text-decoration-line: underline;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export { Container, StyledNavLink };

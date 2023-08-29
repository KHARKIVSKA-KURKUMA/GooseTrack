import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateY(120px);
  @media screen and (min-width: 768px) {
    transform: translateY(132px);
    left: 32px;
    margin: 0;
  }
  @media screen and (min-width: 1440px) {
    right: 32px;
    left: auto;
  }
`;

export { Container };

import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(226px);

  @media screen and (min-width: 768px) {
    transform: translateY(130px);
    margin: 0;
  }
  @media screen and (min-width: 1440px) {
    right: 32px;
    left: auto;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export { Container, LoaderContainer };

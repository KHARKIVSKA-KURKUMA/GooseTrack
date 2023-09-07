import styled from 'styled-components';

const Container = styled.div`
  margin: 0 15px 0;
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(226px); */

  @media screen and (min-width: 768px) {
    margin: 0 32px 0px;
    /* transform: translateY(130px);
    left: 32px;
    margin: 0; */
  }
  @media screen and (min-width: 1440px) {
    margin: 0 32px 0px 323px;
    /* right: 32px;
    left: auto; */
  }
`;


const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export { Container, LoaderContainer };

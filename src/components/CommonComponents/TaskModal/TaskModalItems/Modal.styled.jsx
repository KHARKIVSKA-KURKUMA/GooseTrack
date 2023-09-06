import styled from 'styled-components';

const ModalWindow = styled.div`
  max-width: calc(100vw - 36px);
  max-height: calc(100vh - 88px);
  width: 303px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 48px;
  padding-bottom: 40px;
  background-color: ${props => props.backgroundColor};
  position: relative;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 396px;
    padding-left: 28px;
    padding-right: 28px;
    padding-top: 40px;
  }
`;

export { ModalWindow };

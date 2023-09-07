import styled from 'styled-components';

const CloseModalButton = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  border: none;
  background-color: transparent;

  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export { CloseModalButton };

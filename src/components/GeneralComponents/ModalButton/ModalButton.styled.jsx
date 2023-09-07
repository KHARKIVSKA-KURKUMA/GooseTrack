import styled from 'styled-components';

const Button = styled.button`
  border-radius: 8px;
  border-color: transparent;
  width: calc(50% - 8px);
  cursor: pointer;
  padding-top: 12px;
  padding-bottom: 12px;
  font-family: Inter;
  font-weight: 14px;
  line-height: 1.29;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: ${props => props.textColor || '#343434'};
  background-color: ${props => props.backgroundColor || '#E5EDFA'};
  :not(:last-child) {
    margin-right: 8px;
  }
  @media (min-width: 768px) {
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 14px;
    line-height: 1.29;
  }
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export { Button };

import styled from 'styled-components';

const PeriodPaginatorContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`;

const CalendarButton = styled.button`
  width: 121px;
  height: 30px;
  border: 0;
  border-radius: 8px;
  color: var(--primary-background-color );
  background-color: var(--title-color);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    transform: scale(1.01);
    background-color: #2378f8;
  }

  @media screen and (min-width: 768px) {
    width: 134px;
    height: 34px;
    font-size: 16px;
    font-weight: 500;
  }
`;

const SwitcherContainer = styled.div`
  display: flex;
  width: 72px;
  height: 30px;
  padding: 5px;
  border: 1px solid rgb(220, 227, 229, 50%);
  border-radius: 8px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: #dce3e5;
    top: 0;
    left: 35px;
  }

  @media screen and (min-width: 768px) {
    width: 74px;
    height: 34px;
  }
`;

const SwitcherPart = styled.div`
  flex: 1;
  text-align: center;
  transition: transform 0.3s, color 0.3s;
  color: ${props => (props.active ? 'initial' : '#DCE3E5')};
  cursor: pointer;
  position: relative;

  &:hover {
   
  }

  @media screen and (min-width: 768px) {
    padding-top: 2px;
  }
`;


export {
  PeriodPaginatorContainer,
  ButtonsContainer,
  CalendarButton,
  SwitcherContainer,
  SwitcherPart,
  
};

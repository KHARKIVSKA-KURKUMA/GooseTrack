import styled from 'styled-components';

const CalendarTableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 335px;
  width: 100%;
  height: 74px;
  padding-left: 25px;
  padding-right: 25px;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid rgb(220, 227, 229, 50%);
  border-radius: 8px;
  background-color: var(--primary-background-color);

  @media screen and (min-width: 768px) {
    width: 704px;
    width: 100%;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
    width: 100%;
    padding-left: 45px;
    padding-right: 45px;
  }
`;

const CalendarRow = styled.div``;

const CalendarCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const DayName = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const DateNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 22px;
  font-size: 12px;
  font-weight: 700;

  color: ${props => (props.isCurrent ? '#fff' : 'inherit')};
  background-color: ${props => (props.isCurrent ? '#007bff' : 'inherit')};
  border-radius: ${props => (props.isCurrent ? '6px' : 'inherit')};

  @media screen and (min-width: 768px) {
    width: 27px;
    height: 26px;
    font-size: 16px;
  }
`;

export { CalendarTableWrapper, CalendarRow, CalendarCell, DayName, DateNumber };

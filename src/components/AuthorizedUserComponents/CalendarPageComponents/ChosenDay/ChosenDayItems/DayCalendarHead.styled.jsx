import styled from 'styled-components';

const CalendarTableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-top: 24px;
  margin-bottom: 14px;
  margin-left: auto;
  margin-right: auto;

  width: 335px;
  height: 74px;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid rgb(220, 227, 229, 50%);
  border-radius: 8px;
  background-color: var(--primary-background-color);

  @media screen and (min-width: 768px) {
    width: 704px;
    gap: 65px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 32px;

    width: 1087px;
    gap: 125px;
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

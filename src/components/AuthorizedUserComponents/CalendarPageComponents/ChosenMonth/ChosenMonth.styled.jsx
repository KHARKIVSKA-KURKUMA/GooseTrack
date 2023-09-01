import styled from 'styled-components';

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CalendarDaysWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  width: 335px;
  height: 50px;
  border: 1px solid rgb(220, 227, 229, 50%);
  border-radius: 8px;
  margin-bottom: 15px;
  background-color: var(--primary-background-color);

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 0 35px;
    margin-bottom: 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
    padding: 0 60px;
  }
`;

const CalendarDayWrapper = styled.li`
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.isSunday ? 'var(--title-color)' : 'inherit')};
`;

const CalendarTableWrapper = styled.table`
  border-collapse: collapse;
`;

const CalendarNumberWrapper = styled.tbody`
  background-color: var(--primary-background-color);
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
  }
`;

const CalendarRow = styled.tr`
  height: 94px;

  @media screen and (min-width: 768px) {
    height: 144px;
  }

  @media screen and (min-width: 1440px) {
    height: 125px;
  }
`;

const CalendarCell = styled.td`
  width: 48px;
  text-align: center;
  vertical-align: middle;
  border: 1px solid rgb(220, 227, 229, 50%);
  position: relative;

  @media screen and (min-width: 768px) {
    width: 100.5px;
  }

  @media screen and (min-width: 1440px) {
    width: 155px;
  }
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DateNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 22px;
  margin: 5px 3px 0 0;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  top: 4px;
  right: 4px;

  color: ${props => (props.isCurrent ? 'var(--primary-background-color)' : 'inherit')};
  background-color: ${props => (props.isCurrent ? '#007bff' : 'inherit')};
  border-radius: ${props => (props.isCurrent ? '8px' : 'inherit')};

  @media screen and (min-width: 768px) {
    width: 27px;
    height: 26px;
    margin: 10px 10px 0 0;
    font-size: 16px;
  }
`;

const NoteContainer = styled.div`
  margin-top: 14px;
  padding: 3px;
  border-radius: 8px;
  font-size: 10px;
  max-width: 44px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    max-width: 94px;
    padding: 5px 12px 5px 5px;
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 139px;
    padding: 5px 15px 5px 5px;
  }
`;

const NoteText = styled.span`
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export {
  CalendarWrapper,
  CalendarDaysWrapper,
  CalendarDayWrapper,
  CalendarTableWrapper,
  CalendarNumberWrapper,
  CalendarRow,
  CalendarCell,
  GridContainer,
  DateNumber,
  NoteContainer,
  NoteText,
};

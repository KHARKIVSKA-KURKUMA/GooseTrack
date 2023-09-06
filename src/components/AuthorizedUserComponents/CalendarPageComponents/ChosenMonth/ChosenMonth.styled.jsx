import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CalendarWrapper = styled.div`
  margin: 0 15px 0;

  @media screen and (min-width: 768px) {
    margin: 0 32px 0px;
  }
  @media screen and (min-width: 1440px) {
    margin: 0 32px 0px 323px;
  }
`;

const CalendarDaysWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 335px;
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  padding: 0 15px;
  border: 1px solid rgb(220, 227, 229, 50%);
  border-radius: 8px;
  background-color: var(--primary-background-color);

  @media screen and (min-width: 768px) {
    min-width: 704px;
    width: 100%;
    padding: 0 35px;
    margin-bottom: 18px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1087px;
    width: 100%;
    padding: 0 60px;
  }
`;

const CalendarDayWrapper = styled.li`
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.isSunday ? 'var(--title-color)' : 'inherit')};
`;

const CalendarTableWrapper = styled.div`
  width: 100%;
`;

const CalendarNumberWrapper = styled.div`
  background-color: var(--primary-background-color);
  border-radius: 8px;
  overflow: hidden;
`;

const CalendarRow = styled.div`
  display: flex;
  justify-content: center;

  height: 94px;

  @media screen and (min-width: 768px) {
    height: 144px;
  }

  @media screen and (min-width: 1440px) {
    height: 125px;
  }
`;

const CalendarCell = styled(Link)`
  width: 48px;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  border: 1px solid rgb(220, 227, 229, 50%);
  position: relative;
  background-color: ${props => props.backgroundColor};
  color: inherit;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    min-width: 100.5px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 155px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 7px rgba(62, 133, 243, 1);
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

  color: ${props =>
    props.isCurrent ? 'var(--primary-background-color)' : 'inherit'};
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
  max-width: 34px;
  margin: 20px 0 0 3px;
  border-radius: 8px;
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 375px) {
    max-width: 44px;
  }

  @media screen and (min-width: 768px) {
    max-width: 94px;
    margin-top: 27px;
    padding: 5px 12px 5px 5px;
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 139px;
    width: 100%;
    padding: 5px 15px 5px 5px;
  }
`;

const NoteText = styled.span`
  padding: 3px;
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 700;
  font-size: 14px;
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

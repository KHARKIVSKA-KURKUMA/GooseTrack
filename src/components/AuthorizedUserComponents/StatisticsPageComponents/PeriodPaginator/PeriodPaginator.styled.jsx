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

  .react-datepicker__input-container {
    padding: 8px, 12px, 8px, 12px;
  }

  #datePickerInput {
    background-color: var(--title-color);
    border-radius: 8px;
    padding: 8px, 12px, 8px, 12px;
    height: 34px;
    max-width: 180px;
    margin-right: 8px;
    border: 0;
    color: var(--primary-background-color);

    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;

    color: var(--primary-background-color);
    border: 0;

    @media screen and (min-width: 768px) {
      padding: 8px 12px;
      font-size: 16px;

      align-items: center;
    }
  }

  /* .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: var(--primary-background-color);
    font-family: 'Inter';
    width: 1.7rem;
    line-height: 1.2rem;
    font-size: 18px;
    margin: 10px 10px;
  } */

  .react-datepicker__wrapper {
    position: relative;
  }

  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 327px;
    height: 354px;
    padding: 15px 18px;
    background-color: var(--title-color);
    font-family: Inter;
    border-radius: 16px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background-color: var(--title-color);
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    margin-top: 12px;
    margin-bottom: 8px;
    font-family: 'Inter';
    text-transform: uppercase;
  }

  .react-datepicker__day-name {
    color: white;
    font-weight: 600;
    margin: 8px;
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day
    react-datepicker__day--018.react-datepicker__day--selected
    react-datepicker__day--today {
    outline: none;
    border: none;
  }
  .react-datepicker__current-month {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: var(--primary-background-color);
  }

  .react-datepicker__navigation {
    margin-top: 15px;
    color: var(--primary-background-color);
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }

  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }

  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__navigation-icon::before {
    border-color: var(--primary-background-color);
  }

  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--primary-background-color);
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: var(--primary-background-color);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: var(--primary-background-color);
    color: var(--title-color);
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: var(--primary-background-color);
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: var(--primary-background-color);
    color: var(--title-color);
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: var(--primary-background-color);
    color: var(--title-color);
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
  .react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }

  /* ____  */
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
  color: #fff;
  background-color: #3e85f3;
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
    /* transform: scale(1.7); */
    color: var(--title-color);
  }

  @media screen and (min-width: 768px) {
    padding-top: 2px;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 22px;
  margin: 20px 0 0 10px;
  list-style-type: none;
  padding-left: 0;

  @media screen and (min-width: 768px) {
    padding-bottom: 15px;
  }
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 10px;
  font-size: 14px;

  ::before {
    content: '•';
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    font-size: 35px;
  }

  &:nth-child(1)::before {
    color: #ffd2dd;
    left: -20%;
  }

  &:nth-child(2)::before {
    color: #3e85f3;
    left: -15%;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export {
  PeriodPaginatorContainer,
  ButtonsContainer,
  CalendarButton,
  SwitcherContainer,
  SwitcherPart,
  List,
  ListItem,
};

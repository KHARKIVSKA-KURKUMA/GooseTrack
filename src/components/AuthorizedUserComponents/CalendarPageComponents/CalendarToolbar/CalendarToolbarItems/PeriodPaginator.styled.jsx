import styled from 'styled-components';

const PeriodPaginatorContainer = styled.div`
  .react-datepicker {
    background-color: var(--title-color);
    font-family: 'Inter';
    padding: 18px;
    border-radius: 16px;
  }

  .react-datepicker__input-container {
    padding: 8px, 12px, 8px, 12px;
  }

  #datePickerInput {
    background-color: var(--title-color);
    border-radius: 8px;
    padding: 8px, 12px, 8px, 12px;
    height: 34px;
    width: 134px;
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

  .react-datepicker__header {
    background-color: var(--title-color);
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom: 1px solid #ffffff33;
  }

  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__navigation-icon::before {
    border-color: #ffffff;
    border-style: solid;
    border-width: 3px 3px 0 0;
    content: '';
    display: block;
    height: 9px;
    position: absolute;
    top: 6px;
    width: 9px;
  }

  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::after,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::after {
    border: 0;
  }

  .react-datepicker-popper[data-placement^='top']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before {
    border-bottom-color: transparent;
    border: 0;
    background-color: transparent;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    margin-top: 0;
    margin-bottom: 18px;
    color: var(--primary-background-color);
    font-weight: 600;
    font-family: Inter;
    font-size: 16px;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: var(--primary-background-color);
    font-family: 'Inter';
    width: 1.7rem;
    line-height: 1.2rem;
    font-size: 18 px;
    margin: 10px 10px;
  }
  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    border-radius: 24px;
    width: 24px;
    height: 24px;
    background-color: var(--low-background-color);
    color: var(--primary-background-color);
    text-align: center;
  }

  .react-datepicker__day--highlighted,
  .react-datepicker__month-text--highlighted,
  .react-datepicker__quarter-text--highlighted,
  .react-datepicker__year-text--highlighted {
    border-radius: 0;
    background-color: white;
    color: var(--title-color);
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    border-radius: 24px;
    width: 24px;
    height: 24px;
    background-color: #fff;
    color: var(--title-color);
  }

  /* ____  */

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
  color: var(--primary-background-color);
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

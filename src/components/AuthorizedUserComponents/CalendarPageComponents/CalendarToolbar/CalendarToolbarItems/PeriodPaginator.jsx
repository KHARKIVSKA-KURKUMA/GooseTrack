import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMonths, subMonths, format } from 'date-fns';

import { setDates } from '../../../../../store/data/dataSlice';

import 'react-datepicker/dist/react-datepicker.css';
import {
  PeriodPaginatorContainer,
  ButtonsContainer,
  SwitcherContainer,
  SwitcherPart,
} from './PeriodPaginator.styled';

const PeriodPaginator = ({ selectedPeriodType, date, onDateChange }) => {
  const [activeSwitcher, setActiveSwitcher] = useState(0);

  const currentDate = useSelector(state => state.date.currentDate);

  const dateObject = new Date(currentDate); // об'єкт дати із рядка
  console.log(dateObject);

  const [selectedDate, setSelectedDate] = useState(currentDate);

  console.log('selectedDate :>> ', selectedDate);
  const dispatch = useDispatch();

  const handleSwitcherClick = direction => {
    let newData;

    if (selectedPeriodType === 'month') {
      newData =
        direction === 'previous'
          ? subMonths(currentDate, 1)
          : addMonths(currentDate, 1);
    } else {
      newData =
        direction === 'previous'
          ? new Date(dateObject - 1)
          : new Date(dateObject + 1);
    }

    const newDate = format(newData, 'yyyy-MM-dd');
    console.log('newDate :>> ', newDate);
    dispatch(setDates(newDate));

    setSelectedDate(newDate);
    onDateChange(format(newDate, 'yyyy-MM-dd')); // передаєм форматовану дату для оновлення рядка
  };

  return (
    <PeriodPaginatorContainer>
      <ButtonsContainer>
        {/* <DatePicker
          id="datePickerInput"
          selected={selectedDate}
          onChange={date => {
            setSelectedDate(date);
            onDateChange(date);
          }}
          dateFormat={
            selectedPeriodType === 'month' ? 'MMMM yyyy' : 'd MMM yyyy'
          }
        /> */}
        <SwitcherContainer>
          <SwitcherPart
            active={activeSwitcher === 0}
            onClick={() => {
              setActiveSwitcher(0);
              handleSwitcherClick('previous');
            }}
          >
            ❮
          </SwitcherPart>
          <SwitcherPart
            active={activeSwitcher === 1}
            onClick={() => {
              setActiveSwitcher(1);
              handleSwitcherClick('next');
            }}
          >
            ❯
          </SwitcherPart>
        </SwitcherContainer>
      </ButtonsContainer>
    </PeriodPaginatorContainer>
  );
};

export default PeriodPaginator;

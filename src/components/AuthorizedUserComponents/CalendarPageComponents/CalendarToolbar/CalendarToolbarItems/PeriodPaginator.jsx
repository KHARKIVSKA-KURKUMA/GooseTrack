import React, { useState } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import {
  PeriodPaginatorContainer,
  ButtonsContainer,
  CalendarButton,
  SwitcherContainer,
  SwitcherPart,
} from './PeriodPaginator.styled';

const PeriodPaginator = ({ selectedPeriodType, onDateChange }) => {
  const [activeSwitcher, setActiveSwitcher] = useState(0);
  
  const dateFormat = selectedPeriodType === 'month' ? 'MMM yyyy' : 'd MMM yyyy';

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSwitcherClick = direction => {
    if (selectedPeriodType === 'month') {
      setSelectedDate(
        direction === 'previous'
          ? subMonths(selectedDate, 1)
          : addMonths(selectedDate, 1)
      );
    } else {
      const newDate = new Date(selectedDate);
      newDate.setDate(
        direction === 'previous'
          ? selectedDate.getDate() - 1
          : selectedDate.getDate() + 1
      );
      setSelectedDate(newDate);
    }
    onDateChange(selectedDate);
  };

  return (
    <PeriodPaginatorContainer>
      <ButtonsContainer>
        <CalendarButton>{format(selectedDate, dateFormat)}</CalendarButton>
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

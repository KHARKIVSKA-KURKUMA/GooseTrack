import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, sub, add, parse } from 'date-fns';
import DatePicker from 'react-datepicker';

import {
  PeriodPaginatorContainer,
  ButtonsContainer,
  SwitcherContainer,
  SwitcherPart,
  List,
  ListItem,
} from './PeriodPaginator.styled';
import { selectedDateSelector } from 'store/selectors';
import { setDates } from 'store/date/dateSlice';
import {
  getTasksByDayThunk,
  getTasksByMonthThunk,
} from 'store/tasks/tasksThunks';

const PeriodPaginator = () => {
  const theme = useSelector(state => state.theme);
  const [isSameMonth, setIsSameMonth] = useState(false);
  const backgroundColor = theme === 'light' ? '#fff' : '#21222C';
  const [activeSwitcher, setActiveSwitcher] = useState(0);
  const dispatch = useDispatch();
  const normalizedDate = useSelector(selectedDateSelector);
  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());
  const formattedDay = format(date, 'yyyy-MM-dd');
  const formattedMonth = format(date, 'yyyy-MM');
  const selectedDay = date;

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    dispatch(getTasksByMonthThunk({ month: formattedMonth }));
    dispatch(getTasksByDayThunk({ day: formattedDay }));
  }, [dispatch]);

  useEffect(() => {
    if (!isSameMonth) {
      dispatch(getTasksByMonthThunk({ month: formattedMonth }));
    }
    dispatch(getTasksByDayThunk({ day: formattedDay }));
  }, [dispatch, formattedDay, formattedMonth, isSameMonth]);

  const onChangeDate = e => {
    if (e.currentTarget.id === 'next') {
      setActiveSwitcher(1);
      const newDate = add(date, { days: 1 });
      format(newDate, 'yyyy-MM') === formattedMonth
        ? setIsSameMonth(true)
        : setIsSameMonth(false);

      const formattedNewDate = format(newDate, 'yyyy-MM-dd');
      dispatch(setDates(formattedNewDate));
      return;
    } else {
      const newDate = sub(date, { days: 1 });
      format(newDate, 'yyyy-MM') === formattedMonth
        ? setIsSameMonth(true)
        : setIsSameMonth(false);
      const formattedNewDate = format(newDate, 'yyyy-MM-dd');
      dispatch(setDates(formattedNewDate));
      return;
    }
  };

  const handleChange = date => {
    const formattedNewDate = format(date, 'yyyy-MM-dd');
    format(date, 'yyyy-MM') === formattedMonth
      ? setIsSameMonth(true)
      : setIsSameMonth(false);
    dispatch(setDates(formattedNewDate));
  };
  return (
    <PeriodPaginatorContainer>
      <ButtonsContainer>
        <DatePicker
          id="datePickerInput"
          selected={selectedDay}
          onChange={date => handleChange(date)}
          dateFormat={'d MMM yyyy'}
        />
        <SwitcherContainer>
          <SwitcherPart
            style={{ backgroundColor }}
            active={activeSwitcher === 0}
            type="button"
            id="prev"
            onClick={onChangeDate}
          >
            ❮
          </SwitcherPart>
          <SwitcherPart
            style={{ backgroundColor }}
            active={activeSwitcher === 1}
            type="button"
            id="next"
            onClick={onChangeDate}
          >
            ❯
          </SwitcherPart>
        </SwitcherContainer>
      </ButtonsContainer>
      <List>
        <ListItem>By Day</ListItem>
        <ListItem>By Month</ListItem>
      </List>
    </PeriodPaginatorContainer>
  );
};

export default PeriodPaginator;

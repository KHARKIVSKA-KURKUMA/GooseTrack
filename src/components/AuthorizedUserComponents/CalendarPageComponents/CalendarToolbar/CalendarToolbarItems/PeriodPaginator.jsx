import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, sub, add, parse } from 'date-fns';
import DatePicker from 'react-datepicker';

import { setDates } from '../../../../../store/date/dateSlice';

import {
  PeriodPaginatorContainer,
  ButtonsContainer,
  SwitcherContainer,
  SwitcherPart,
  SwitcherPartRight,
} from './PeriodPaginator.styled';
import { selectedDateSelector } from 'store/selectors';
import { useNavigate, useParams } from 'react-router-dom';

const PeriodPaginator = ({ type }) => {
  const theme = useSelector(state => state.theme);
  const backgroundColor = theme === 'light' ? '#fff' : '#21222C';
  const [activeSwitcher, setActiveSwitcher] = useState(0);
  const params = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const normalizedDate = useSelector(selectedDateSelector);

  useEffect(() => {
    if (params.currentDate) {
      if (normalizedDate !== params.currentDate) {
        dispatch(setDates(params.currentDate));
      }
    }
  }, [dispatch, normalizedDate, params.currentDate]);

  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());
  const selectedDay = date;

  const onChangeDate = e => {
    if (e.currentTarget.name === 'next') {
      setActiveSwitcher(1);
      if (type === 'day') {
        const newDate = add(date, { days: 1 });
        const formattedNewDate = format(newDate, 'yyyy-MM-dd');
        dispatch(setDates(formattedNewDate));
        navigate(`${type}/${formattedNewDate}`);
        return;
      }
      const newDate = add(date, { months: 1 });
      const formattedNewDate = format(newDate, 'yyyy-MM-dd');
      dispatch(setDates(formattedNewDate));
      navigate(`${type}/${formattedNewDate}`);
      return;
    }
    if (type === 'day') {
      const newDate = sub(date, { days: 1 });
      const formattedNewDate = format(newDate, 'yyyy-MM-dd');
      dispatch(setDates(formattedNewDate));
      navigate(`${type}/${formattedNewDate}`);
      return;
    }
    const newDate = sub(date, { months: 1 });
    const formattedNewDate = format(newDate, 'yyyy-MM-dd');
    setActiveSwitcher(0);
    dispatch(setDates(formattedNewDate));
    navigate(`${type}/${formattedNewDate}`);
    return;
  };
  const handleChange = date => {
    const formattedNewDate = format(date, 'yyyy-MM-dd');
    dispatch(setDates(formattedNewDate));
    navigate(`day/${formattedNewDate}`);
  };

  return (
    <PeriodPaginatorContainer>
      <ButtonsContainer>
        <DatePicker
          id="datePickerInput"
          selected={selectedDay}
          onChange={date => handleChange(date)}
          dateFormat={type === 'month' ? 'MMMM yyyy' : 'd MMM yyyy'}
        />
        <SwitcherContainer>
          <SwitcherPart
            style={{ backgroundColor }}
            active={activeSwitcher === 0}
            type="button"
            name="prev"
            onClick={onChangeDate}
          >
            ❮
          </SwitcherPart>
          <SwitcherPartRight
            style={{ backgroundColor }}
            active={activeSwitcher === 1}
            type="button"
            name="next"
            onClick={onChangeDate}
          >
            ❯
          </SwitcherPartRight>
        </SwitcherContainer>
      </ButtonsContainer>
    </PeriodPaginatorContainer>
  );
};

export default PeriodPaginator;

import React, { useState, useEffect } from 'react';
import { PeriodPaginator, PeriodTypeSelect } from './CalendarToolbarItems';
import { ToolbarWrapper } from './CalendarToolbar.styled';
import { useLocation, useParams } from 'react-router-dom';
import { format, parse } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { selectedDateSelector, tasksSelector } from 'store/selectors';
import {
  getTasksByDayThunk,
  getTasksByMonthThunk,
} from 'store/tasks/tasksThunks';

const CalendarToolbar = () => {
  const { currentDate } = useParams();

  const [type, setType] = useState('month');
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname.slice(0, -11);
  useEffect(() => {
    if (pathname === '/calendar/day') {
      setType('day');
      return;
    }
    setType('month');
  }, [pathname]);

  const selectedDate = useSelector(selectedDateSelector);
  const normalizedDate = currentDate || selectedDate;

  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());
  const formattedMonth = format(date, 'yyyy-MM');
  const formattedDay = format(date, 'yyyy-MM-dd');

  const { isChanged } = useSelector(tasksSelector);

  /* eslint-disable react-hooks/exhaustive-deps */

  useEffect(() => {
    if (type === 'month') {
      dispatch(
        getTasksByMonthThunk({
          month: formattedMonth,
        })
      );
    } else {
      dispatch(
        getTasksByDayThunk({
          day: formattedDay,
        })
      );
    }
  }, [dispatch, isChanged, normalizedDate]);

  return (
    <div>
      <ToolbarWrapper>
        <PeriodPaginator type={type} />
        <PeriodTypeSelect today={currentDate} onChangeType={setType} />
      </ToolbarWrapper>
    </div>
  );
};

export default CalendarToolbar;

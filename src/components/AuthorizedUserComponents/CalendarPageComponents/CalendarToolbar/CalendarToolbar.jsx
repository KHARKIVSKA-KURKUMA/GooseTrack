import React, { useState, useEffect } from 'react';
import { PeriodPaginator, PeriodTypeSelect } from './CalendarToolbarItems';
import { ToolbarWrapper } from './CalendarToolbar.styled';
import { useLocation } from 'react-router-dom';
import { format, parse } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { selectedDateSelector, tasksSelector } from 'store/selectors';
import { getTasksByMonthThunk } from 'store/tasks/tasksThunks';

const CalendarToolbar = () => {
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

  const normalizedDate = useSelector(selectedDateSelector);

  const date = parse(normalizedDate, 'yyyy-MM-dd', Date.now());
  const formattedYear = format(date, 'yyyy');
  const formattedMonth = format(date, 'MM');

  /* eslint-disable react-hooks/exhaustive-deps */

  useEffect(() => {
    dispatch(
      getTasksByMonthThunk({
        year: formattedYear,
        month: formattedMonth,
      })
    );
  }, [dispatch, normalizedDate]);

  const { tasks } = useSelector(tasksSelector);
  console.log('tasks :>> ', tasks);
  return (
    <div>
      <ToolbarWrapper>
        <PeriodPaginator type={type} />
        <PeriodTypeSelect today={date} onChangeType={setType} />
      </ToolbarWrapper>
    </div>
  );
};

export default CalendarToolbar;

import React, { useState, useEffect } from 'react';
import {
  CalendarTableWrapper,
  CalendarRow,
  CalendarCell,
  DayName,
  DateNumber
} from './DayCalendarHead.styled';

const DayCalendarHead = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [daysOfWeek, setDaysOfWeek] = useState(['M', 'T', 'W', 'T', 'F', 'S', 'S']);

  useEffect(() => {
    const handleResize = () => {
      const newDaysOfWeek = window.innerWidth >= 768
        ? ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
        : ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
      setDaysOfWeek(newDaysOfWeek);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const startOfWeek = new Date(selectedDate);
  const dayOfWeek = selectedDate.getDay();
  const diff = selectedDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
  startOfWeek.setDate(diff);

  const generateCalendar = () => {
    const calendar = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      const isCurrent = day.toDateString() === selectedDate.toDateString();

      calendar.push(
        <CalendarRow key={i}>
          <CalendarCell className={isCurrent ? 'current-day' : ''}>
            <DayName>{daysOfWeek[i]}</DayName>
            <DateNumber isCurrent={isCurrent}>{day.getDate()}</DateNumber>
          </CalendarCell>
        </CalendarRow>
      );
    }

    return calendar;
  };

  return (
    <>
      <div>
        <span>{`${selectedDate.toLocaleString('default', {
          month: 'long',
        })} ${selectedDate.getFullYear()}`}</span>
        <button
          onClick={() =>
            setSelectedDate(prevDate => {
              const newDate = new Date(prevDate);
              newDate.setDate(prevDate.getDate() - 1);
              return newDate;
            })
          }
        >
          ❮
        </button>
        <button
          onClick={() =>
            setSelectedDate(prevDate => {
              const newDate = new Date(prevDate);
              newDate.setDate(prevDate.getDate() + 1);
              return newDate;
            })
          }
        >
          ❯
        </button>
      </div>
      <CalendarTableWrapper>{generateCalendar()}</CalendarTableWrapper>
    </>
  );
};

export default DayCalendarHead;

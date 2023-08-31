import React, { useState, useEffect } from 'react';
import { CalendarDaysWrapper, CalendarDayWrapper } from '../ChosenMonth.styled';

const MonthCalendarHead = () => {

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

  return (
    <CalendarDaysWrapper>
      {daysOfWeek.map((day, index) => (
        <CalendarDayWrapper
          key={day + index}
          isSunday={day === 'Sun' || (index === daysOfWeek.length - 1) || (index === daysOfWeek.length - 2)}
        >
          {day}
        </CalendarDayWrapper>
      ))}
    </CalendarDaysWrapper>
  );
};

export default MonthCalendarHead;

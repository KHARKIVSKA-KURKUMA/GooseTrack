import React, { useState, useEffect } from 'react';
import { PeriodPaginator, PeriodTypeSelect } from './CalendarToolbarItems';
import { ToolbarWrapper } from './CalendarToolbar.styled';

import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CalendarToolbar = () => {
  // Extract the 'date' parameter from the URL using useParams
  const { date } = useParams();
  const location = useLocation();

  const [type, setType] = useState('month');
  const [dateObject, setDateObject] = useState(new Date());

  const pathname = location.pathname.slice(0, -11);

  useEffect(() => {
    if (pathname.endsWith('/calendar/day')) {
      setType('day');
    } else {
      setType('month');
    }
  }, [pathname]);

  // Function to set the date
  const handleDateChange = newDate => {
    // You can perform any necessary logic here
    console.log('New date:', newDate);
  };

  return (
    <div>
      <ToolbarWrapper>
        <PeriodPaginator
          type={type}
          date={date}
          onDateChange={handleDateChange}
        />
        <PeriodTypeSelect today={date} onChangeType={setType} />
      </ToolbarWrapper>
    </div>
  );
};

export default CalendarToolbar;

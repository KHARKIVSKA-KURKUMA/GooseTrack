import React, { useState, useEffect } from 'react';
import { PeriodPaginator, PeriodTypeSelect } from './CalendarToolbarItems';
import { ToolbarWrapper } from './CalendarToolbar.styled';
<<<<<<< Updated upstream
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const CalendarToolbar = () => {
  const [selectedPeriodType, setSelectedPeriodType] = useState('day');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateFormat, setDateFormat] = useState('d MMM yyyy'); // Додайте цей стейт

  const location = useLocation();
=======
import { useLocation,  } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CalendarToolbar = () => {
  // Extract the 'date' parameter from the URL using useParams
  const { date } = useParams();
  const location = useLocation();

  const [type, setType] = useState('month');
  const [dateObject, setDateObject] = useState(new Date());
>>>>>>> Stashed changes

  const pathname = location.pathname.slice(0, -11);

  useEffect(() => {
    if (pathname.endsWith('/calendar/day')) {
<<<<<<< Updated upstream
      setSelectedPeriodType('day');
      return;
    }
    setSelectedPeriodType('month');
  }, [pathname]);

  console.log(dateFormat);

  const handleChangeType = type => {
    setSelectedPeriodType(type);
    setDateFormat(type === 'month' ? 'MMM yyyy' : 'd MMM yyyy'); // Змінюємо формат дати
  };

  const handleChangeDate = newDate => {
    setSelectedDate(newDate);
  };

  const formattedToday = selectedDate.toISOString();
=======
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
>>>>>>> Stashed changes

  return (
    <div>
      <ToolbarWrapper>
        <PeriodPaginator
<<<<<<< Updated upstream
          selectedPeriodType={selectedPeriodType}
          onDateChange={handleChangeDate}
          date={formattedToday}
        />
        <PeriodTypeSelect
          today={formattedToday}
          onChangeType={handleChangeType}
          onChangeDate={handleChangeDate}
=======
          type={type}
          date={date} 
          onDateChange={handleDateChange}
>>>>>>> Stashed changes
        />
        <PeriodTypeSelect today={date} onChangeType={setType} />
      </ToolbarWrapper>
    </div>
  );
};

export default CalendarToolbar;

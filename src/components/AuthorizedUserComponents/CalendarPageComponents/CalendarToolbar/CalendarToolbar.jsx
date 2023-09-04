import React, { useState, useEffect } from 'react';
import { PeriodPaginator, PeriodTypeSelect } from './CalendarToolbarItems';
import { ToolbarWrapper } from './CalendarToolbar.styled';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const CalendarToolbar = () => {
  const [selectedPeriodType, setSelectedPeriodType] = useState('day');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateFormat, setDateFormat] = useState('d MMM yyyy'); // Додайте цей стейт

  const location = useLocation();

  const pathname = location.pathname.slice(0, -11);

  useEffect(() => {
    if (pathname.endsWith('/calendar/day')) {
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

  return (
    <div>
      <ToolbarWrapper>
        <PeriodPaginator
          selectedPeriodType={selectedPeriodType}
          onDateChange={handleChangeDate}
          date={formattedToday}
        />
        <PeriodTypeSelect
          today={formattedToday}
          onChangeType={handleChangeType}
          onChangeDate={handleChangeDate}
        />
      </ToolbarWrapper>
    </div>
  );
};

export default CalendarToolbar;

// import PropTypes from 'prop-types';

// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// import { PeriodPaginator, PeriodTypeSelect } from './CalendarToolbarItems';
// import { ToolbarWrapper } from './CalendarToolbar.styled';

// const CalendarToolbar = ({ today, prevHandler, nextHandler }) => {

//   const handleChangeDate = newDate => {
//     setSelectedDate(newDate);
//   };

// const [type, setType] = useState('month');

// const location = useLocation();

// const pathname = location.pathname.slice(0, -11);

// useEffect(() => {
//   if (pathname.endsWith('/calendar/day')) {
//     setType('day');
//     return;
//   }
//   setType('month');
// }, [pathname]);

//  const handleChangeType = type => {
//    // Обробка зміни типу періоду
//  };

//   return (
//     <ToolbarWrapper>
//       <PeriodPaginator />
//       <PeriodTypeSelect today={today} onChangeType={handleChangeType} onChangeDate={handleChangeDate} />
//     </ToolbarWrapper>
//   );
// };

// export default CalendarToolbar;

// PeriodTypeSelect.propTypes = {
//   today: PropTypes.string.isRequired,
//   onChangeType: PropTypes.func.isRequired,
// };

// import PropTypes from 'prop-types';

// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

import { PeriodPaginator, PeriodTypeSelect } from './CalendarToolbarItems';
import { ToolbarWrapper } from './CalendarToolbar.styled';

const CalendarToolbar = ({ today, prevHandler, nextHandler }) => {
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

  return (
    <ToolbarWrapper>
      <PeriodPaginator />
      <PeriodTypeSelect  />
    </ToolbarWrapper>
  );
};

export default CalendarToolbar;

// PeriodTypeSelect.propTypes = {
//   today: PropTypes.string.isRequired,
//   onChangeType: PropTypes.func.isRequired,
// };

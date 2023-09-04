<<<<<<< Updated upstream
import { useState } from 'react';
=======
import { useSelector } from 'react-redux';
>>>>>>> Stashed changes
import { Item, List, StyledNavLink } from './PeriodTypeSelect.styled';

const PeriodTypeSelect = ({ onChangeType }) => {
  const currentDate = useSelector(state => state.date.currentDate);

  return (
    <List>
      <Item>
<<<<<<< Updated upstream
        <StyledNavLink className={activeButton === 'month' ? 'active' : ''}>
=======
        <StyledNavLink
          className="month"
          to={`/calendar/month/${currentDate}`}
          onClick={() => onChangeType('month')}
        >
>>>>>>> Stashed changes
          Month
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink
<<<<<<< Updated upstream
          className={activeButton === 'day' ? 'active' : ''}
          onClick={() => handleButtonClick('day')}
          to={`/calendar/day/${today}`}
=======
          className="day"
          to={`/calendar/day/${currentDate}`}
          onClick={() => onChangeType('day')}
>>>>>>> Stashed changes
        >
          Day
        </StyledNavLink>
      </Item>
    </List>
  );
};

export default PeriodTypeSelect;

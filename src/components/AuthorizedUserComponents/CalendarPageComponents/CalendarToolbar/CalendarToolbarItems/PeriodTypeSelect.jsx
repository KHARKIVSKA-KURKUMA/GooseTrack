import { useState } from 'react';
import { Item, List, StyledNavLink } from './PeriodTypeSelect.styled';

const PeriodTypeSelect = ({ today, onChangeType, onChangeDate }) => {
  const [activeButton, setActiveButton] = useState('day'); // Початкова активна кнопка

  const handleButtonClick = type => {
    setActiveButton(type);
    onChangeType(type);

    const currentDate = new Date();
    const newDate =
      type === 'month'
        ? new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
        : currentDate;
    onChangeDate(newDate);
  };

  return (
    <List>
      <Item>
        <StyledNavLink className={activeButton === 'month' ? 'active' : ''}>
          Month
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink
          className={activeButton === 'day' ? 'active' : ''}
          onClick={() => handleButtonClick('day')}
          to={`/calendar/day/${today}`}
        >
          Day
        </StyledNavLink>
      </Item>
    </List>
  );
};

export default PeriodTypeSelect;

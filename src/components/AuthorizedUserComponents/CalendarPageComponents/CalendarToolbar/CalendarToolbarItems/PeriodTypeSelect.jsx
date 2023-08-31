import { useState } from 'react';
import { Item, List, Button } from './PeriodTypeSelect.styled';

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
        <Button
          className={activeButton === 'month' ? 'active' : ''}
          onClick={() => handleButtonClick('month')}
        >
          Month
        </Button>
      </Item>
      <Item>
        <Button
          className={activeButton === 'day' ? 'active' : ''}
          onClick={() => handleButtonClick('day')}
        >
          Day
        </Button>
      </Item>
    </List>
  );
};

export default PeriodTypeSelect;

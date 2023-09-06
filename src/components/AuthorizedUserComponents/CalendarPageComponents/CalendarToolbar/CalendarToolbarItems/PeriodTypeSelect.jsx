import { useSelector } from 'react-redux';

import { Item, List, StyledNavLink } from './PeriodTypeSelect.styled';

const PeriodTypeSelect = ({ onChangeType }) => {
  const theme = useSelector(state => state.theme);
  const currentDate = useSelector(state => state.date.currentDate);
  console.log('currentDate :>> ', currentDate);
  const backgroundColor = theme === 'light' ? '#E3F3FF' : '#21222C';
  
  
  
  return (
    <List>
      <Item>
        <StyledNavLink style={{ backgroundColor }}
          className="month"
          to={`/calendar/month/${currentDate}`}
          onClick={() => onChangeType('month')}
        >
          Month
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink  style={{ backgroundColor }}
          className="day"
          to={`/calendar/day/${currentDate}`}
          onClick={() => onChangeType('day')}
        >
          Day
        </StyledNavLink>
      </Item>
    </List>
  );
};

export default PeriodTypeSelect;

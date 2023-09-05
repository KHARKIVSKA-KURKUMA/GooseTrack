import { useSelector } from 'react-redux';

import { Item, List, StyledNavLink } from './PeriodTypeSelect.styled';

const PeriodTypeSelect = ({ onChangeType }) => {
  const currentDate = useSelector(state => state.date.currentDate);

  return (
    <List>
      <Item>
        <StyledNavLink
          className="month"
          to={`/calendar/month/${currentDate}`}
          onClick={() => onChangeType('month')}
        >
          Month
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink
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

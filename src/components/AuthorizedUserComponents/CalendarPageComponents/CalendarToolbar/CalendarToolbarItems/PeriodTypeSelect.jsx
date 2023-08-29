// import PropTypes from 'prop-types';

// import { format } from 'date-fns';
import { Item, List, Button } from './PeriodTypeSelect.styled';

const PeriodTypeSelect = ({ today, onChangeType }) => {
  // const formattedToday = format(new Date(today), 'yyyy-MM-dd');

  return (
    <List>
      <Item>
        <Button className="month">Month</Button>
        {/* <StyledNavLink
          className="month"
          to={`/calendar/month/${formattedToday}`}
          onClick={() => onChangeType('month')}
        >
          {'Month'}
        </StyledNavLink> */}
      </Item>
      <Item>
        <Button className="day active">Day</Button>
        {/* <StyledNavLink
          className="day"
          to={`/calendar/day/${formattedToday}`}
          onClick={() => onChangeType('day')}
        >
          {'Day'}
        </StyledNavLink> */}
      </Item>
    </List>
  );
};

export default PeriodTypeSelect;

// PeriodTypeSelect.propTypes = {
//   today: PropTypes.string.isRequired,
//   onChangeType: PropTypes.func.isRequired,
// };
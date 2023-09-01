import { CalendarTable, MonthCalendarHead } from './ChosenMonthItem';
import { CalendarWrapper } from './ChosenMonth.styled';
import PropTypes from 'prop-types';

const ChosenMonth = ({selectedDate}) => {
  return (
    <CalendarWrapper>
      <MonthCalendarHead />
      <CalendarTable selectedDate={ selectedDate } />
    </CalendarWrapper>
  );
};

ChosenMonth.protoType = {
  selectedDate: PropTypes.node.isRequired,
};

export default ChosenMonth;


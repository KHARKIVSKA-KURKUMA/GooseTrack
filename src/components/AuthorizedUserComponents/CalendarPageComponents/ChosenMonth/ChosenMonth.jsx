import { CalendarTable, MonthCalendarHead } from './ChosenMonthItem';
import { CalendarWrapper } from './ChosenMonth.styled';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const ChosenMonth = () => {
  const { currentDate } = useParams();
  return (
    <CalendarWrapper>
      <MonthCalendarHead />
      <CalendarTable selectedDate={currentDate} />
    </CalendarWrapper>
  );
};

ChosenMonth.protoType = {
  selectedDate: PropTypes.node.isRequired,
};

export default ChosenMonth;

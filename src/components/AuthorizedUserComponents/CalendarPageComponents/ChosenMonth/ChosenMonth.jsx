import { CalendarTable, MonthCalendarHead } from './ChosenMonthItem';
import { CalendarWrapper } from './ChosenMonth.styled';

const ChosenMonth = ({selectedDate}) => {
  return (
    <CalendarWrapper>
      <MonthCalendarHead />
      <CalendarTable selectedDate={ selectedDate } />
    </CalendarWrapper>
  );
};

export default ChosenMonth;

import {
  DayCalendarHead,
  TasksColumn,
  TasksColumnsList,
} from './ChosenDayItems';

const ChosenDay = () => {
  return (
    <>
      <DayCalendarHead />
      <TasksColumnsList />
      <TasksColumn />
    </>
  );
};

export default ChosenDay;

import { useDispatch, useSelector } from 'react-redux';
import {
  CalendarTableWrapper,
  CalendarNumberWrapper,
  CalendarRow,
  CalendarCell,
  GridContainer,
  DateNumber,
  NoteContainer,
  NoteText,
} from '../ChosenMonth.styled';
import { tasksSelector } from 'store/selectors';
import { useEffect } from 'react';
import { getTasksByMonthThunk } from 'store/tasks/tasksThunks';
import { format, parse } from 'date-fns';

const getPriorityBackgroundColor = priority => {
  if (priority === 'high') return '#FFD2DD';
  if (priority === 'medium') return '#FCF0D4';
  if (priority === 'low') return '#CEEEFD';
};
const getPriorityColor = priority => {
  if (priority === 'high') return '#EA3D65';
  if (priority === 'medium') return '#F3B249';
  if (priority === 'low') return '#72C2F8';
};

const CalendarTable = props => {
  const theme = useSelector(state => state.theme);
  const selectedDateUnFormat = props.selectedDate;
  const selectedDate = new Date(selectedDateUnFormat);
  const dispatch = useDispatch();
  /* eslint-disable react-hooks/exhaustive-deps */

  const date = parse(selectedDateUnFormat, 'yyyy-MM-dd', Date.now());
  const formattedMonth = format(date, 'yyyy-MM');
  const { tasks } = useSelector(tasksSelector);
  useEffect(() => {
    dispatch(
      getTasksByMonthThunk({
        month: formattedMonth,
      })
    );
  }, [dispatch]);
  /* -------------------------------------------------------------------------- */
  const notesArr = tasks.map(task => {
    const data = task.data;
    const note = data.map(task => {
      const date = new Date(task.date);
      const priority = task.priority;
      const title = task.title;
      return { date, title, priority };
    });
    return note;
  });

  const uniqueTasks = {};

  const filteredNotesArr = notesArr.map(note => {
    return note.filter(task => {
      const dateStr = task.date.toISOString();
      if (!uniqueTasks[dateStr]) {
        uniqueTasks[dateStr] = true;
        return true;
      }
      return false;
    });
  });
  const notes = filteredNotesArr.flat();

  const daysInMonth = date => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  const isCurrentDate = (day, month, year) => {
    const currentDate = selectedDate;
    // const currentDate = new Date();
    return (
      day === currentDate.getDate() &&
      month === currentDate.getMonth() &&
      year === currentDate.getFullYear()
    );
  };

  const renderNotes = day => {
    const notesForDay = notes
      .filter(note => {
        return (
          note.date.getDate() === day &&
          note.date.getMonth() === selectedDate.getMonth() &&
          note.date.getFullYear() === selectedDate.getFullYear()
        );
      })
      .map((note, index) => (
        <NoteContainer
          key={index}
          style={{
            backgroundColor: getPriorityBackgroundColor(note.priority),
            color: getPriorityColor(note.priority),
          }}
        >
          <NoteText>{note.title}</NoteText>
        </NoteContainer>
      ));

    return notesForDay.length > 0 ? notesForDay : null;
  };

  const generateCalendar = () => {
    const firstDayOfMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );
    const days = daysInMonth(selectedDate);
    const startDate = (firstDayOfMonth.getDay() + 6) % 7;
    const weeks = Math.ceil((days + startDate) / 7);

    const calendar = [];
    let day = 1;
    const backgroundColor = theme === 'light' ? '#fff' : '#21222C';
    for (let i = 0; i < weeks; i++) {
      const week = [];

      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < startDate) || day > days) {
          week.push(<CalendarCell key={j}></CalendarCell>);
        } else {
          const isCurrent = isCurrentDate(
            day,
            selectedDate.getMonth(),
            selectedDate.getFullYear()
          );

          week.push(
            <CalendarCell
              style={{ backgroundColor }}
              key={j}
              className={isCurrent ? 'current-day' : ''}
              to={`/calendar/day/${selectedDate.getFullYear()}-${
                selectedDate.getMonth() < 9
                  ? '0' + (selectedDate.getMonth() + 1)
                  : selectedDate.getMonth() + 1
              }-${day < 10 ? '0' + day : day}`}
            >
              <GridContainer>
                <DateNumber isCurrent={isCurrent}>{day}</DateNumber>
                {renderNotes(day) && (
                  <NoteContainer>{renderNotes(day)}</NoteContainer>
                )}
              </GridContainer>
            </CalendarCell>
          );
          day++;
        }
      }

      calendar.push(<CalendarRow key={i}>{week}</CalendarRow>);
    }

    return calendar;
  };
  const backgroundColor = theme === 'light' ? '#fff' : '#21222C';
  return (
    <CalendarTableWrapper style={{ borderCollapse: 'collapse' }}>
      <CalendarNumberWrapper style={{ backgroundColor }}>
        {generateCalendar()}
      </CalendarNumberWrapper>
    </CalendarTableWrapper>
  );
};

export default CalendarTable;

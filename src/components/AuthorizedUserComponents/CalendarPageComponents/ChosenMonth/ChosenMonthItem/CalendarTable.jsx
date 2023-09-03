import { useSelector } from 'react-redux';
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
import { selectedDateSelector } from 'store/selectors';

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const color = `rgb(${r},${g},${b})`;
  return color;
};

const getDarkerColor = () => {
  const bgColor = getRandomColor();
  const r = parseInt(bgColor.slice(1, 3), 16);
  const g = parseInt(bgColor.slice(3, 5), 16);
  const b = parseInt(bgColor.slice(5, 7), 16);
  const darkerR = Math.max(0, r - 20);
  const darkerG = Math.max(0, g - 20);
  const darkerB = Math.max(0, b - 20);
  const darkerColor = `#${darkerR.toString(16)}${darkerG.toString(
    16
  )}${darkerB.toString(16)}`;

  return darkerColor;
};

const CalendarTable = () => {
  const selectedDateUnFormat = useSelector(selectedDateSelector);
  const selectedDate = new Date(selectedDateUnFormat);
  const selectedDateNow = selectedDate;

  const notes = [
    { date: new Date(2023, 7, 1), text: 'Заметка для 1 августа' },
    { date: new Date(2023, 7, 30), text: 'Заметка для 5 августа' },
  ];

  const daysInMonth = date => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  const isCurrentDate = (day, month, year) => {
    const currentDate = new Date();
    return (
      day === currentDate.getDate() &&
      month === currentDate.getMonth() &&
      year === currentDate.getFullYear()
    );
  };

  const renderNotes = day => {
    const backgroundColor = getRandomColor();
    const textColor = getDarkerColor(backgroundColor);

    const notesForDay = notes
      .filter(note => {
        return (
          note.date.getDate() === day &&
          note.date.getMonth() === selectedDateNow.getMonth() &&
          note.date.getFullYear() === selectedDateNow.getFullYear()
        );
      })
      .map((note, index) => (
        <NoteContainer
          key={index}
          style={{ backgroundColor, color: textColor }}
        >
          <NoteText>{note.text}</NoteText>
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
            <CalendarCell key={j} className={isCurrent ? 'current-day' : ''}>
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

  return (
    <CalendarTableWrapper style={{ borderCollapse: 'collapse' }}>
      <CalendarNumberWrapper>{generateCalendar()}</CalendarNumberWrapper>
    </CalendarTableWrapper>
  );
};

export default CalendarTable;

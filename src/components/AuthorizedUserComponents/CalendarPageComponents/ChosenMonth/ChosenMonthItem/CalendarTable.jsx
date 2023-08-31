import React, { useState } from 'react';
import styled from 'styled-components';

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

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CalendarDateWrapper = styled.span`
  background-color: #3e85f3;
  color: #fff;
`;

const CalendarTableWrapper = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 335px;
`;

const CalendarDaysWrapper = styled.thead`
  border-collapse: collapse;
  border-spacing: 0;
  width: 335px;
`;

const CalendarDayWrapper = styled.tr`
  font-size: 16px;
  font-weight: 600;
`;

const CalendarNumberWrapper = styled.tbody`
  background-color: #fff;
  border-collapse: collapse;
`;

const CalendarRow = styled.tr`
  height: 94px;
`;

const CalendarCell = styled.td`
  width: 48px;
  text-align: center;
  vertical-align: middle;
  border: 2px solid rgb(220, 227, 229, 50%);
  position: relative;
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DateNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 22px;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  top: 4px;
  right: 4px;

  color: ${props => (props.isCurrent ? '#fff' : 'inherit')};
  background-color: ${props => (props.isCurrent ? '#007bff' : 'inherit')};
  border-radius: ${props => (props.isCurrent ? '50%' : 'inherit')};
`;

const NoteContainer = styled.div`
  margin-top: 14px;
  padding: 3px;
  border-radius: 4px;
  font-size: 11px;
  max-width: 44px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoteText = styled.span`
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const CalendarTable = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfWeek = ['M', 'TU', 'W', 'TH', 'F', 'SA', 'SU'];
  // я змінила ключі подумай що можна зробити дві T i S бути не може, дякую

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
          note.date.getMonth() === selectedDate.getMonth() &&
          note.date.getFullYear() === selectedDate.getFullYear()
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
    <CalendarWrapper>
      <div>
        <CalendarDateWrapper>{`${selectedDate.toLocaleString('default', {
          month: 'long',
        })} ${selectedDate.getFullYear()}`}</CalendarDateWrapper>
        <button
          onClick={() =>
            setSelectedDate(
              new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth() - 1,
                1
              )
            )
          }
        >
          ❮
        </button>
        <button
          onClick={() =>
            setSelectedDate(
              new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth() + 1,
                1
              )
            )
          }
        >
          ❯
        </button>
      </div>
      <CalendarTableWrapper>
        <CalendarDaysWrapper>
          <CalendarDayWrapper>
            {daysOfWeek.map(day => (
              <th key={day}>{day}</th>
            ))}
          </CalendarDayWrapper>
        </CalendarDaysWrapper>
        <CalendarNumberWrapper>{generateCalendar()}</CalendarNumberWrapper>
      </CalendarTableWrapper>
    </CalendarWrapper>
  );
};

export default CalendarTable;

import CalendarToolbar from 'components/AuthorizedUserComponents/CalendarPageComponents/CalendarToolbar';
import ChosenDay from 'components/AuthorizedUserComponents/CalendarPageComponents/ChosenDay';
import ChosenMonth from 'components/AuthorizedUserComponents/CalendarPageComponents/ChosenMonth';
import MainLayout from 'components/AuthorizedUserComponents/MainLayout/MainLayout';
import PageLayout from '../../components/PageLayout/PageLayout';
import React, { useState } from 'react';

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <PageLayout>
      <MainLayout />
      <CalendarToolbar />

      {/* потім треба прибрати */}
      <div>
        <span>{`${selectedDate.toLocaleString('default', {
          month: 'long',
        })} ${selectedDate.getFullYear()}`}</span>
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

      <ChosenMonth selectedDate={selectedDate} />
      <ChosenDay />
    </PageLayout>
  );
};

export default CalendarPage;

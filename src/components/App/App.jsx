import { ToastContainer } from 'react-toastify';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import Layout from 'components/UnauthorizedUserComponents/Layout/Layout';
import AccountPage from 'pages/AccountPage/AccountPage';
import CalendarPage from 'pages/CalendarPage/CalendarPage';
import StatisticsPage from 'pages/StatisticsPage/StatisticsPage';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ChosenDay from 'components/AuthorizedUserComponents/CalendarPageComponents/ChosenDay/ChosenDay';

export const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ToastContainer autoClose={1500} theme="colored" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="account" element={<AccountPage />}></Route>
          <Route path="calendar" element={<CalendarPage />}></Route>
          <Route path="calendar/day/:currentDay" element={<ChosenDay />} />
          <Route path="statistics" element={<StatisticsPage />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </LocalizationProvider>
  );
};

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
import Restricted from 'components/Routes/Restricted';
import Private from 'components/Routes/Private';

export const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ToastContainer autoClose={1500} theme="colored" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route
            path="register"
            element={<Restricted component={RegisterPage} to="/calendar" />}
          ></Route>
          <Route
            path="login"
            element={<Restricted component={LoginPage} to="/calendar" />}
          ></Route>
          <Route
            path="account"
            element={<Private component={AccountPage} to="/" />}
          ></Route>
          <Route
            path="calendar"
            element={<Private component={CalendarPage} to="/" />}
          ></Route>
          <Route
            path="statistics"
            element={<Private component={StatisticsPage} to="/" />}
          ></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </LocalizationProvider>
  );
};

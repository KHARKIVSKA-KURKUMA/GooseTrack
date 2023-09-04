import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import Layout from 'components/UnauthorizedUserComponents/Layout/Layout';
import AccountPage from 'pages/AccountPage/AccountPage';
import CalendarPage from 'pages/CalendarPage/CalendarPage';
import StatisticsPage from 'pages/StatisticsPage/StatisticsPage';
import Restricted from 'components/Routes/Restricted';
import Private from 'components/Routes/Private';
import { GlobalStyle } from './GlobalStyles';
import ChosenDay from 'components/AuthorizedUserComponents/CalendarPageComponents/ChosenDay/ChosenDay';
import ChosenMonth from 'components/AuthorizedUserComponents/CalendarPageComponents/ChosenMonth/ChosenMonth';
import PageNotFound from 'components/PageNotFound/PageNotFound';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={1000} theme="colored" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Restricted component={MainPage} to="/calendar" />}
          />
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
          >
            {/* <Route
              path="month/:currentDate"
              element={<Private component={ChosenMonth} to="/" />}
            ></Route>
            <Route
              path="day/:currentDate"
              element={<Private component={ChosenDay} to="/" />}
            ></Route> */}
          </Route>

          <Route
            path="statistics"
            element={<Private component={StatisticsPage} to="/" />}
          ></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

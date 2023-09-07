import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/UnauthorizedUserComponents/Layout/Layout';
import Restricted from 'components/Routes/Restricted';
import Private from 'components/Routes/Private';
import { GlobalStyle } from './GlobalStyles';
import { Suspense, lazy, useEffect } from 'react';
import PageNotFound from 'components/PageNotFound/PageNotFound';
import ChosenMonth from 'components/AuthorizedUserComponents/CalendarPageComponents/ChosenMonth/ChosenMonth';
import ChosenDay from 'components/AuthorizedUserComponents/CalendarPageComponents/ChosenDay/ChosenDay';
import Loader from 'components/Loader/Loader';
import { LoaderContainer } from 'components/AuthorizedUserComponents/AccountPageComponents/UserForm/UserForm.styled';
import { fetchCurrentUser } from 'store/user/operations';
import { useDispatch } from 'react-redux';
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const AccountPage = lazy(() => import('pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage/CalendarPage'));
const StatisticsPage = lazy(() =>
  import('pages/StatisticsPage/StatisticsPage')
);

export const App = () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch, refreshToken]);
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={1000} theme="colored" />
      <Suspense
        fallback={
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        }
      >
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
              <Route
                path="month/:currentDate"
                element={<Private component={ChosenMonth} to="/" />}
              ></Route>
              <Route
                path="day/:currentDate"
                element={<Private component={ChosenDay} to="/" />}
              ></Route>
            </Route>
            <Route
              path="statistics"
              element={<Private component={StatisticsPage} to="/" />}
            ></Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

import { ToastContainer } from 'react-toastify';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import Layout from 'components/UnauthorizedUserComponents/Layout/Layout';

export const App = () => {
  return (
    <>
      <ToastContainer autoClose={1500} theme="colored" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="register" element={<RegisterPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

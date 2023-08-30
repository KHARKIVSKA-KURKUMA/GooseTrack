import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectorIsLogin } from '../../store/auth/authSelectors';

const Restricted = ({ component: Component, to = '/' }) => {
  const isLogin = useSelector(selectorIsLogin);
  return isLogin ? <Navigate to={to} /> : <Component />;
};

export default Restricted;

import { ModalWindow } from './ModalWindow.styled';
import { useSelector } from 'react-redux';
const Modal = ({ children }) => {
  const theme = useSelector(state => state.theme);
  const backgroundColor = theme === 'light' ? '#fff' : '#171820';
  return (
    <ModalWindow backgroundColor={backgroundColor}>{children}</ModalWindow>
  );
};

export default Modal;

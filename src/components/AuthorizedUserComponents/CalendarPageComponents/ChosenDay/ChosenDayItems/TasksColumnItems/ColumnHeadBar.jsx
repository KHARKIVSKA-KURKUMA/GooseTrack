// import { AiOutlinePlusCircle } from 'react-icons/ai';
// import {
//   HeadBarAddBtn,
//   HeadBarTitle,
//   HeadBarContainer,
// } from './TaskColumnItems.styled';
import { useSelector } from 'react-redux';
import { tasksSelector } from 'store/selectors';
import {
  HeadBarAddBtn,
  HeadBarContainer,
  HeadBarTitle,
} from './ColumnHeadBarStyle';

const ColumnHeadBar = ({ title }) => {
  const theme = useSelector(state => state.theme);
   const stroke = theme === 'light' ? '#21222C' : '#fff';
  const { tasks } = useSelector(tasksSelector);
  const isEmpty = tasks.length === 0;

  return (
    <HeadBarContainer isEmpty={isEmpty}>
      <HeadBarTitle>{title}</HeadBarTitle>
      <HeadBarAddBtn stroke={stroke} />
    </HeadBarContainer>
  );
};

export default ColumnHeadBar;

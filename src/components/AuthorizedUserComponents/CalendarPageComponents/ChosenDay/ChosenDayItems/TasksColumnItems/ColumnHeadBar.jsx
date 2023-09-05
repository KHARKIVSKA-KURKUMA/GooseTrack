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
  const { tasks } = useSelector(tasksSelector);
  const isEmpty = tasks.length === 0;

  return (
    <HeadBarContainer isEmpty={isEmpty}>
      <HeadBarTitle>{title}</HeadBarTitle>
      <HeadBarAddBtn />
    </HeadBarContainer>
  );
};

export default ColumnHeadBar;

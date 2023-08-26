import { AiOutlinePlusCircle } from 'react-icons/ai';
import {
  HeadBarAddBtn,
  HeadBarTitle,
  HeadBarContainer,
} from './TaskColumnItems.styled';

const ColumnHeadBar = () => {
  return (
    <HeadBarContainer>
      <HeadBarTitle>Title</HeadBarTitle>
      <HeadBarAddBtn>
        <AiOutlinePlusCircle size={22} strokeWidth="5" />
      </HeadBarAddBtn>
    </HeadBarContainer>
  );
};

export default ColumnHeadBar;

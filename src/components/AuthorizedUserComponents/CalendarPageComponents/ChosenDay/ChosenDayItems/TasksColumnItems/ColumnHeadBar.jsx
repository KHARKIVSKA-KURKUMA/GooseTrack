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
        <AiOutlinePlusCircle size={22} stroke-width="4" />
      </HeadBarAddBtn>
    </HeadBarContainer>
  );
};

export default ColumnHeadBar;

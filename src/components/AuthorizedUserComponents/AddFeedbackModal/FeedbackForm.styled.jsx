import styled from 'styled-components';
import { BiPencil } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';

const StarWrapper = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

const NameLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  color: ${props => props.color};
`;

const InputStars = styled.input`
  display: none;
`;

const FeedbackWrapper = styled.div`
  margin-bottom: 14px;

  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
`;

const InputFeedback = styled.textarea`
  resize: none;
  background-color: ${props => props.backgroundColor};
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 14px;
  padding-right: 14px;
  border: ${props =>
    props.hasError
      ? '1px solid #EA3D65'
      : props.borderColor
      ? `1px solid ${props.borderColor}`
      : 'none'};
  border-radius: 8px;
  width: 100%;
  color: ${props => props.colorTextArea};
  font-family: Inter;
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;

  ::placeholder {
    color: color: ${props => props.colorText};
    font-size: 14px;
    line-height: 1.29;
    font-weight: 600;
  }
`;

const ErrorsMessage = styled.p`
  margin-top: 5px;
  color: #ea3d65;
  font-size: 12px;
  line-height: 1.29;
  font-weight: 500;
`;

const IconWrapper = styled.div`
  display: flex;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const CircleIcon = styled.div`
  display: inline-block;
  margin-left: 8px;
  width: 30px;
  height: 30px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#E3F3FF'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    /* background-color: var(--hover-color); */
    transform: scale(1.1);
  }
`;

const IconButton = styled.div`
  border: none;
`;

const StyledBiPencil = styled(BiPencil)`
  color: #3e85f3;
  cursor: pointer;

  &:hover {
    /* background-color: var(--hover-color); */
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

const StyledRiDeleteBinLine = styled(RiDeleteBinLine)`
  color: #ea3d65;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

export {
  StarWrapper,
  NameLabel,
  InputStars,
  FeedbackWrapper,
  InputFeedback,
  ErrorsMessage,
  IconWrapper,
  CircleIcon,
  TitleWrapper,
  IconButton,
  StyledBiPencil,
  StyledRiDeleteBinLine,
};

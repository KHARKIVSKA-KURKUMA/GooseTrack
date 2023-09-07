import styled from 'styled-components';

const TitleWrapper = styled.div`
  margin-bottom: 16px;
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

const Textarea = styled.textarea`
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
    color: ${props => props.colorText};
    font-size: 14px;
    line-height: 1.29;
    font-weight: 600;
  }
`;

const TimeBox = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskWrapper = styled.div`
  display: flex;
`;

const TimeInput = styled.input`
  background-color: #f6f6f6;
  max-width: 163px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 14px;
  padding-right: 14px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  border: ${props => (props.hasError ? '1px solid #EA3D65' : 'none')};
  border-radius: 8px;

  @media (min-width: 375px) {
    width: 126px;
  }
  @media (min-width: 768px) {
    width: 163px;
  }
`;

const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Span = styled.span`
  margin-left: 8px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalButton = styled.button`
  border-radius: 8px;
  border-color: transparent;
  width: calc(50% - 8px);
  cursor: pointer;
  padding-top: 12px;
  padding-bottom: 12px;
  font-family: Inter;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: ${props => props.textColor || '#343434'};
  background-color: ${props => props.backgroundColor || '#E5EDFA'};
  :not(:last-child) {
    margin-right: 8px;
  }

  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 14px;
    line-height: 1.29;
  }
`;
const CheckBoxWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

const CheckBoxLabel = styled.label`
  margin-right: 16px;
  margin-bottom: 16px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  color: ${props => props.colorText};
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

const HighInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid #ea3d65;
  background-color: transparent;
  margin-right: 5px;

  :checked {
    background-color: #ea3d65;
  }
`;

const MediumInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid #f3b249;
  background-color: transparent;
  margin-right: 5px;

  :checked {
    background-color: #f3b249;
  }
`;

const LowInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid #72c2f8;
  background-color: transparent;
  margin-right: 5px;

  :checked {
    background-color: #72c2f8;
  }
`;

const ErrorsMessage = styled.p`
  margin-bottom: 5px;
  color: #ea3d65;
  font-size: 12px;
  line-height: 1.29;
  font-weight: 500;
`;

export {
  EditWrapper,
  Span,
  TitleWrapper,
  TaskWrapper,
  NameLabel,
  Textarea,
  ModalButton,
  ButtonWrapper,
  CheckBoxLabel,
  LowInput,
  HighInput,
  MediumInput,
  CheckBoxWrapper,
  TimeWrapper,
  TimeBox,
  TimeInput,
  ErrorsMessage,
};

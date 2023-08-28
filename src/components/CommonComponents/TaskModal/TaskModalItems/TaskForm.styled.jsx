import styled from "styled-components";

const TaskWrapper = styled.div`
display:flex;
`;

const NameLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  color: rgba(52, 52, 52, 0.8);
`;

const Textarea = styled.textarea`
  resize: none;
  background-color: #f6f6f6;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 14px;
  padding-right: 14px;
  border: ${props => (props.hasError ? '1px solid #EA3D65' : 'none')};
  border-radius: 8px;
  width: 100%;
  color: #343434;
  font-family: Inter;
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;

  ::placeholder {
    color: #343434;
    font-size: 14px;
    line-height: 1.29;
    font-weight: 600;
  }
`;



const EditWrapper = styled.div`
display:flex;
align-items: center;
justify-content: center;
`;

const Span = styled.span`
margin-left:8px;
`;

export { EditWrapper,  Span,TaskWrapper, NameLabel, Textarea};
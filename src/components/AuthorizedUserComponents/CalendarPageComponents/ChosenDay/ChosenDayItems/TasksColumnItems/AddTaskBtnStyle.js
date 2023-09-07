import styled from 'styled-components';

const AddTaskButton = styled.button`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 100%;
  color: #111111;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;
  cursor: pointer;
  border: ${props => props.borderColor};
  border-radius: 8px;
  margin-top: 32px;
  margin-bottom: 28px;
  background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: rgb(62, 133, 243); stroke-width: 2; stroke-dasharray: 5 5'/></svg>");
  background-color: ${props => props.backgroundColor};
  transition: background-color 350ms ease-in-out, color 350ms ease-in-out;
  &:hover,
  &:focus {
    background-color: ${props => (props.disabled ? '#cccccc' : '#2b78ef')};
    color: ${props => (props.disabled ? '#111111' : '#ffffff')};
  }
`;

export { AddTaskButton };

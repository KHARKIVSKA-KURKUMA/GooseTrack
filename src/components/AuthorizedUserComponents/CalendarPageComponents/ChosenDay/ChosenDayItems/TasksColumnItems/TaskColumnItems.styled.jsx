import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../../../../../img/taskToolbarArrow.svg';
import Menu from '@mui/material/Menu/Menu';

const AddTaskButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-top: 14px;
  padding-bottom: 14px;
  width: calc(100% - 9px);
  color: #111111;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;
  border: none;
  border-radius: 8px;
  margin-top: 11px;
  background-image: url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill: none; stroke: rgb(62, 133, 243); stroke-width: 2; stroke-dasharray: 5 5'/></svg>");
  background-color: ${props => (props.disabled ? '#cccccc' : '#e3f3ff')};
  transition: background-color 350ms ease-in-out, color 350ms ease-in-out;
  &:hover,
  &:focus {
    background-color: ${props => (props.disabled ? '#cccccc' : '#2b78ef')};
    color: ${props => (props.disabled ? '#111111' : '#ffffff')};
  }
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;
/* -------------------------------------------------------------------------- */
/* -------------------------------- Head Bar -------------------------------- */
const HeadBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => (props.isEmpty ? '0' : '24px')};
  @media screen and (min-width: 768px) {
    margin-bottom: ${props => (props.isEmpty ? '0' : '28px')};
  }
`;
const HeadBarTitle = styled.p`
  font-weight: 700;
  padding: 7px 0;
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
const HeadBarAddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
`;
/* -------------------------------------------------------------------------- */
/* ---------------------------- Task Column List ---------------------------- */
const TaskColumnContainer = styled.ul`
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
/* -------------------------------------------------------------------------- */
/* ---------------------------- Task Column Card ---------------------------- */
const CardContainer = styled.li`
  border: 1px solid #dce3e5;
  border-radius: 8px;
  padding: 14px 14px 18px 14px;
  background-color: #f7f6f9;
  margin-right: 9px;
  position: relative;
`;
const BottomContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
const TaskMeta = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

const Description = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 28px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.8px solid #3e85f3;
`;

const Priority = styled.p`
  display: inline-flex;
  border-radius: 6px;
  padding: 4px 12px;
  font-weight: 600;
  color: #f7f6f9;
  font-size: 10px;
  line-height: 12px;
`;
/* -------------------------------------------------------------------------- */
/* ------------------------------- TaskToolbar ------------------------------ */
const MenuStyled = styled(Menu)`
  #moveList {
    border-radius: 8px;
    width: 150px;
    padding: 0;
  }
  #moveItem {
    padding: 14px 24px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: #343434;
  }
  #moveItem:hover {
    background-color: rgba(227, 243, 255, 5);
  }
`;
const TaskToolbarContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const TaskToolbarBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
`;
const GroupBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
`;
const GroupList = styled.ul`
  width: 150px;
`;
const StyledArrow = styled(Arrow)`
  g > path {
    stroke: #343434;
  }
`;
/* -------------------------------------------------------------------------- */
export {
  AddTaskButton,
  HeadBarTitle,
  HeadBarAddBtn,
  HeadBarContainer,
  TaskColumnContainer,
  Priority,
  Avatar,
  Description,
  CardContainer,
  BottomContainer,
  TaskMeta,
  TaskToolbarContainer,
  TaskToolbarBtn,
  GroupBtn,
  GroupList,
  StyledArrow,
  MenuStyled,
};

import styled from 'styled-components';

import Menu from '@mui/material/Menu/Menu';

import { ReactComponent as Arrow } from '../../../../../../img/tasks-svg/arrow-right.svg';
import { ReactComponent as Pencil } from '../../../../../../img/tasks-svg/pencil-01.svg';
import { ReactComponent as Trash } from '../../../../../../img/tasks-svg/trash-04.svg';

const TaskToolbarContainer = styled.div`
  display: flex;
  gap: 10px;
`;

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
    color: #3e85f3;
  }
`;

const IconBtnArrow = styled(Arrow)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${props => props.stroketoolbar};
  transition: stroke 250ms linear;
  margin-right: 10px;
  &:hover {
    stroke: #2b78ef;
  }
`;

const IconBtnPencil = styled(Pencil)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${props => props.stroketoolbar};
  transition: stroke 250ms linear;
  margin-right: 10px;
  &:hover {
    stroke: #2b78ef;
  }
`;

const IconBtnTrash = styled(Trash)`
  cursor: pointer;
  width: 16px;
  height: 16px;
  stroke: ${props => props.stroketoolbar};
  transition: stroke 250ms linear;
  &:hover {
    stroke: #2b78ef;
  }
`;

const StyledArrow = styled(Arrow)`
  g > path {
    stroke: #343434;
  }
`;

export {
  TaskToolbarContainer,
  MenuStyled,
  IconBtnArrow,
  IconBtnPencil,
  IconBtnTrash,
  StyledArrow,
};

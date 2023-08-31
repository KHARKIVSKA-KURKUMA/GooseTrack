import { ReactComponent as Arrow } from '../../../../../../img/taskToolbarArrow.svg';
import { ReactComponent as Trash } from '../../../../../../img/taskToolbarTrash.svg';
import { ReactComponent as Pen } from '../../../../../../img/taskToolbarPen.svg';
import {
  TaskToolbarContainer,
  TaskToolbarBtn,
  StyledArrow,
  MenuStyled,
} from './TaskColumnItems.styled';
import Menu from '@mui/material/Menu/Menu';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import { useState } from 'react';

const TaskToolbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  /* -------------------------------------------------------------------------- */
  const groups = ['To do', 'In progress', 'Done'];
  const currentGroup = 'To do';

  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const availableGroups = groups.filter(group => group !== currentGroup);

  const handleDeleteTask = () => {
    console.log('click delete');
  };
  const handleEditTask = () => {
    console.log('click edit');
  };

  return (
    <TaskToolbarContainer>
      <TaskToolbarBtn onClick={handleClick}>
        <Arrow />
      </TaskToolbarBtn>
      <MenuStyled
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          id: 'moveList',
        }}
      >
        {availableGroups.map(group => (
          <MenuItem id={'moveItem'} key={group} onClick={handleClose}>
            {group} <StyledArrow />
          </MenuItem>
        ))}
      </MenuStyled>
      <TaskToolbarBtn onClick={handleEditTask}>
        <Pen />
      </TaskToolbarBtn>
      <TaskToolbarBtn onClick={handleDeleteTask}>
        <Trash />
      </TaskToolbarBtn>
    </TaskToolbarContainer>
  );
};

export default TaskToolbar;

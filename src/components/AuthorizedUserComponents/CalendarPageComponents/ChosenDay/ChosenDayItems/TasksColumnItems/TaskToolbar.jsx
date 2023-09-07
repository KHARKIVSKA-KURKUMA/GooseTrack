import MenuItem from '@mui/material/MenuItem/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { deleteTask, editTask } from 'store/tasks/tasksThunks';
import TaskModal from 'components/CommonComponents/TaskModal/TaskModal';
import { useDispatch, useSelector } from 'react-redux';

import {
  IconBtnArrow,
  IconBtnPencil,
  IconBtnTrash,
  MenuStyled,
  StyledArrow,
  TaskToolbarContainer,
} from './TaskToolbarStyle';
import { setIsChanged } from 'store/tasks/tasksSlice';
import { getColumnTitle } from 'helpers/getColumnTitle';

const TaskToolbar = ({ task }) => {
  const theme = useSelector(state => state.theme);
  const stroketoolbar = theme === 'light' ? '#111111' : '#FFFFFF';
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  /* -----------------------------Modal Window Logic--------------------------------------------- */

  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /// Toggle Modal Function ///
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  /// Not to scroll page when modal open ///
  useEffect(() => {
    if (showModal) {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsModalOpen(false);
      document.body.style.overflow = 'auto';
    }
  }, [showModal]);

  /* ---------------------------------Move Task------------------------------------------- */
  const groups = ['to-do', 'in-progress', 'done'];
  const currentGroup = task.category;

  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const availableGroups = groups.filter(group => group !== currentGroup);
  const availableGroupsTitle = availableGroups.map(title =>
    getColumnTitle(title)
  );

  const handleMoveTask = availableGroup => {
    dispatch(
      editTask({
        id: task.id,
        title: task.description,
        start: task.start,
        end: task.end,
        priority: task.priority,
        date: task.date,
        category: availableGroup,
      })
    );
    dispatch(setIsChanged('true'));
    handleClose();
  };
  /* -------------------------------Delete Task--------------------------------------- */
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClickClose = () => {
    setOpenModal(false);
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
    dispatch(setIsChanged('true'));
  };

  return (
    <TaskToolbarContainer>
      <IconBtnArrow
        onClick={handleClick}
        stroketoolbar={stroketoolbar}
      ></IconBtnArrow>

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
        <MenuItem
          id={'moveItem'}
          key={availableGroups[0]}
          onClick={() => handleMoveTask(availableGroups[0])}
        >
          {availableGroupsTitle[0]} <StyledArrow />
        </MenuItem>
        <MenuItem
          id={'moveItem'}
          key={availableGroupsTitle[1]}
          onClick={() => handleMoveTask(availableGroups[1])}
        >
          {availableGroupsTitle[1]} <StyledArrow />
        </MenuItem>
      </MenuStyled>

      <IconBtnPencil
        onClick={toggleModal}
        stroketoolbar={stroketoolbar}
      ></IconBtnPencil>
      <IconBtnTrash
        onClick={handleClickOpen}
        stroketoolbar={stroketoolbar}
      ></IconBtnTrash>

      <Dialog
        open={openModal}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Delete task?'}</DialogTitle>
        <DialogActions>
          <Button onClick={handleDeleteTask}>Yes</Button>
          <Button onClick={handleClickClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
      {isModalOpen && (
        <TaskModal
          toggleModal={toggleModal}
          taskToEdit={task}
          date={task.date}
          category={task.category}
        />
      )}
    </TaskToolbarContainer>
  );
};

export default TaskToolbar;

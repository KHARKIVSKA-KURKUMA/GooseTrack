// import { ReactComponent as Arrow } from '../../../../../../img/taskToolbarArrow.svg';
// import { ReactComponent as Trash } from '../../../../../../img/taskToolbarTrash.svg';
// import { ReactComponent as Pen } from '../../../../../../img/taskToolbarPen.svg';
// import {
//   TaskToolbarContainer,
//   TaskToolbarBtn,
//   StyledArrow,
//   MenuStyled,
// } from './TaskColumnItems.styled';
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

const TaskToolbar = ({ task }) => {
  const theme = useSelector(state => state.theme);
  const strokeToolBar = theme === 'light' ? '#111111' : '#FFFFFF';
  const [anchorEl, setAnchorEl] = useState(null);

  /* -------------------------------------------------------------------------- */

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

  const dispatch = useDispatch();
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

  const handleMoveTask = availableGroup => {
    console.log(availableGroup);

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
    // console.log('response.status :>> ', response);
    // if (response.status >= 200 && response.status < 300) {
    //   toast.success('Task deleted successfully');
    // } else {
    //   toast.error('Oops, something went wrong...');
    // }
  };

  return (
    <TaskToolbarContainer>
      <IconBtnArrow onClick={handleClick} strokeToolBar={strokeToolBar}></IconBtnArrow>


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
          {availableGroups[0]} <StyledArrow />
        </MenuItem>
        <MenuItem
          id={'moveItem'}
          key={availableGroups[1]}
          onClick={() => handleMoveTask(availableGroups[1])}
        >
          {availableGroups[1]} <StyledArrow />
        </MenuItem>
      </MenuStyled>

      <IconBtnPencil onClick={toggleModal} strokeToolBar={strokeToolBar}></IconBtnPencil>
      <IconBtnTrash onClick={handleClickOpen} strokeToolBar={strokeToolBar}></IconBtnTrash>

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

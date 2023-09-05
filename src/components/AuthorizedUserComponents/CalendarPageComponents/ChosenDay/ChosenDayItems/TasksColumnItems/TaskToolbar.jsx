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
import { useState, useEffect } from 'react';
import { deleteTask } from 'store/tasks/tasksThunks';
import TaskModal from 'components/CommonComponents/TaskModal/TaskModal';
import { useDispatch } from 'react-redux';

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
  console.log('task :>> ', task);
  const [anchorEl, setAnchorEl] = useState(null);
  //  const [isModalOpen, setIsModalOpen] = useState(false);

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
  /* -------------------------------------------------------------------------- */
  const groups = ['to-do', 'in-progress', 'done'];
  const currentGroup = 'to-do';

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
      {/* <TaskToolbarBtn onClick={handleClick}>
        <Arrow />
      </TaskToolbarBtn> */}
      <IconBtnArrow onClick={handleClick}></IconBtnArrow>

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

      {/* <TaskToolbarBtn onClick={toggleModal}>
        <Pen />
      </TaskToolbarBtn> */}

      <IconBtnPencil onClick={toggleModal}></IconBtnPencil>

      {/* <TaskToolbarBtn onClick={handleDeleteTask}>
        <Trash />
      </TaskToolbarBtn> */}

      <IconBtnTrash onClick={handleDeleteTask}></IconBtnTrash>

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

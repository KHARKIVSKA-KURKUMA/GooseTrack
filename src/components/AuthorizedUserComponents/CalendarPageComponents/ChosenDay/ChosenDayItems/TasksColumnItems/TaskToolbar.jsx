import { ReactComponent as Arrow } from '../../../../../../img/taskToolbarArrow.svg';
import { ReactComponent as Trash } from '../../../../../../img/taskToolbarTrash.svg';
import { ReactComponent as Pen } from '../../../../../../img/taskToolbarPen.svg';
import {
  TaskToolbarContainer,
  TaskToolbarBtn,
  StyledArrow,
  MenuStyled,
} from './TaskColumnItems.styled';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import { useState, useEffect } from 'react';
import { deleteTask } from 'store/tasks/tasksThunks';
import TaskModal from 'components/CommonComponents/TaskModal/TaskModal';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const TaskToolbar = ({ task, date, title }) => {
  
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
  const groups = ['to-do', 'in progress', 'done'];
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
    const response = dispatch(deleteTask(task._id));
    if (response.status >= 200 && response.status < 300) {
      toast.success('Task deleted successfully');
    } else {
      toast.error('Oops, something went wrong...');
    }
  };

  // const handleEditTask = () => {
  //   console.log('click edit');
  // };

  console.log(title);

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
      <TaskToolbarBtn onClick={toggleModal}>
        <Pen />
      </TaskToolbarBtn>
      <TaskToolbarBtn onClick={handleDeleteTask}>
        <Trash />
      </TaskToolbarBtn>
      {isModalOpen && (
        <TaskModal
          toggleModal={toggleModal}
          taskToEdit={task}
          date={date}
          category={title}
        />
      )}
    </TaskToolbarContainer>
  );
};

export default TaskToolbar;

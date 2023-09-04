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

const TaskToolbar = () => {
  const task = {
    category: 'to-do',
    createdAt: '2023-09-04T06:19:58.359Z',
    date: '2023-09-04',
    end: '09:30',
    owner: '64f57625b3b81b1fbd56fd95',
    priority: 'high',
    start: '09:00',
    title: 'task1',
    updatedAt: '2023-09-04T06:19:58.359Z',
    _id: '64f5c66614b0742f27fb60a6',
  };

  console.log(task._id);
  console.log(task);


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
      {isModalOpen && <TaskModal toggleModal={toggleModal} taskToEdit={task} date={task.date} category={task.category} />}
    </TaskToolbarContainer>
  );
};

export default TaskToolbar;

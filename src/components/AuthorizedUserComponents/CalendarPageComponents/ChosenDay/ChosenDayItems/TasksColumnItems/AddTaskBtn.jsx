import React, { useState, useEffect } from 'react';
// import { AddTaskButton } from './TaskColumnItems.styled';
import { AiOutlinePlus } from 'react-icons/ai';
import { useSelector } from 'react-redux';

import TaskModal from 'components/CommonComponents/TaskModal/TaskModal';
import { AddTaskButton } from './AddTaskBtnStyle';

const AddTaskBtn = () => {
  // const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = useSelector(state => state.theme); 
  const backgroundColor = theme === 'light' ? '#E3F3FF' : '#3E85F3';
    const borderColor = theme === 'light' ? '#3E85F3' : 'none';

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

  const isButtonDisabled = false;
  return (
    <>
      <AddTaskButton disabled={isButtonDisabled} onClick={toggleModal} backgroundColor={ backgroundColor} borderColor={ borderColor} >
        <AiOutlinePlus size="24px" />
        Add task
      </AddTaskButton>
      {isModalOpen && (
        <TaskModal
          toggleModal={toggleModal}
          date={'2023-09-04'}
          category={'done'}
        />
      )}
    </>
  );
};

export default AddTaskBtn;

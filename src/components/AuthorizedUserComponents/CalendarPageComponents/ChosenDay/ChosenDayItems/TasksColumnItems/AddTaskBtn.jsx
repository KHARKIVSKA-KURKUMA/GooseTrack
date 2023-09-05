import React, { useState, useEffect } from 'react';
// import { AddTaskButton } from './TaskColumnItems.styled';
import { AiOutlinePlus } from 'react-icons/ai';

import TaskModal from 'components/CommonComponents/TaskModal/TaskModal';
import { AddTaskButton } from './AddTaskBtnStyle';

const AddTaskBtn = ({ selectedDate, title }) => {
  // const [isButtonDisabled, setIsButtonDisabled] = useState(true);
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

  const isButtonDisabled = false;
  return (
    <>
      <AddTaskButton disabled={isButtonDisabled} onClick={toggleModal}>
        <AiOutlinePlus size="24px" />
        Add task
      </AddTaskButton>
      {isModalOpen && (
        <TaskModal
          toggleModal={toggleModal}
          date={selectedDate}
          category={title}
        />
      )}
    </>
  );
};

export default AddTaskBtn;

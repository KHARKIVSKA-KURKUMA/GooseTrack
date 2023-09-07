import { GrClose } from 'react-icons/gr';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Overlay from 'components/GeneralComponents/Overlay/Overlay';
import { CloseModalButton } from './TaskModal.styled';

import { TaskForm, Modal } from './TaskModalItems';

const taskModalRoot = document.querySelector('#task-modal-root');

const TaskModal = ({ toggleModal, taskToEdit, date, category }) => {
  /// Close modal by pressing Escape ///

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  /// Close modal by click on overlay ///
  const handleOverlay = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleOverlay}>
      <Modal>
        <CloseModalButton type="button" onClick={toggleModal}>
          <GrClose size={20} />
        </CloseModalButton>
        <TaskForm
          toggleModal={toggleModal}
          taskToEdit={taskToEdit}
          date={date}
          category={category}
        />
      </Modal>
    </Overlay>,
    taskModalRoot
  );
};

export default TaskModal;

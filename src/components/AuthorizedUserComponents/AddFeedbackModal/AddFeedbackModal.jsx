import { GrClose } from 'react-icons/gr';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Overlay from 'components/GeneralComponents/Overlay/Overlay';
import Modal from 'components/GeneralComponents/ModalWindow/ModalWindow';
import FeedbackForm from './FeedbackForm';
import { CloseModalButton } from './AddFeedbackModal.styled';

const feedbackModalRoot = document.querySelector('#feedback-modal-root');

const AddFeedbackModal = ({ toggleModal }) => {
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
        <FeedbackForm toggleModal={toggleModal} />
      </Modal>
    </Overlay>,
    feedbackModalRoot
  );
};

export default AddFeedbackModal;

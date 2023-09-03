import React, { useState, useEffect } from 'react';
import { getByOwner } from 'store/feedback/feedbackThunks';
import { useDispatch } from 'react-redux';
import { Button } from './AddFeedbackBtn.styled';
import AddFeedbackModal from '../../AddFeedbackModal/AddFeedbackModal';

const AddFeedbackBtn = () => {
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

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

  const handleClick = async () => {
    await dispatch(getByOwner());
    toggleModal();
  };

  return (
    <>
      <Button type="button" onClick={handleClick}>
        Feedback
      </Button>
      {isModalOpen && <AddFeedbackModal toggleModal={toggleModal} />}
    </>
  );
};

export default AddFeedbackBtn;

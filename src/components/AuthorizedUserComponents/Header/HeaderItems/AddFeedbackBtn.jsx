import React, { useState, useEffect } from 'react';
import { Button } from './AddFeedbackBtn.styled';
import AddFeedbackModal from '../../AddFeedbackModal/AddFeedbackModal';
import { getFeedbackThunk } from 'store/feedback/feedbackThunks';
import { feedbackSelector } from 'store/selectors';
import { useDispatch, useSelector } from 'react-redux';

// import TaskModal from 'components/CommonComponents/TaskModal/TaskModal';

const AddFeedbackBtn = () => {
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  /* -------------------------------------------------------------------------- */
  const dispatch = useDispatch();
  const { feedback } = useSelector(feedbackSelector);
  console.log('feedback :>> ', feedback[0]);
  /* -------------------------------------------------------------------------- */
  /// Toggle Modal Function ///
  const toggleModal = () => {
    console.log('Toggle modal called');
    /* -------------------------------------------------------------------------- */
    dispatch(getFeedbackThunk());
    /* -------------------------------------------------------------------------- */
    console.log('Show modal before:', showModal);
    setShowModal(!showModal);
    console.log('Show modal after:', showModal);
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

  return (
    <>
      <Button type="button" onClick={toggleModal}>
        Feedback
      </Button>
      {isModalOpen && <AddFeedbackModal toggleModal={toggleModal} />}
      {/* {isModalOpen && <TaskModal toggleModal={toggleModal} />} */}
    </>
  );
};

export default AddFeedbackBtn;

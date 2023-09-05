// import { AiOutlinePlusCircle } from 'react-icons/ai';
// import {
//   HeadBarAddBtn,
//   HeadBarTitle,
//   HeadBarContainer,
// } from './TaskColumnItems.styled';
import { useSelector } from 'react-redux';
import { tasksSelector } from 'store/selectors';
import {
  HeadBarAddBtn,
  HeadBarContainer,
  HeadBarTitle,
} from './ColumnHeadBarStyle';
import { useEffect, useState } from 'react';
import TaskModal from 'components/CommonComponents/TaskModal/TaskModal';

const ColumnHeadBar = ({ title, selectedDate }) => {
  const { tasks } = useSelector(tasksSelector);
  const isEmpty = tasks.length === 0;
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

  return (
    <HeadBarContainer onClick={toggleModal} isEmpty={isEmpty}>
      <HeadBarTitle>{title}</HeadBarTitle>
      <HeadBarAddBtn />
      {isModalOpen && (
        <TaskModal
          toggleModal={toggleModal}
          date={selectedDate}
          category={title}
        />
      )}
    </HeadBarContainer>
  );
};

export default ColumnHeadBar;

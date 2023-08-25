// import { useState } from 'react';
import { AddTaskButton } from './TaskColumnItems.styled';
import { AiOutlinePlus } from 'react-icons/ai';

const AddTaskBtn = () => {
  // const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const isButtonDisabled = false;
  return (
    <AddTaskButton disabled={isButtonDisabled}>
      <AiOutlinePlus size="24px" />
      Add task
    </AddTaskButton>
  );
};

export default AddTaskBtn;

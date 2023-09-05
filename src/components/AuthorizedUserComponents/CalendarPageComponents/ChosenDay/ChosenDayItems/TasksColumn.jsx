// import { ColumnContainer } from './TaskColumn.styled';
import { TaskItem } from './TasksColumnStyle';
import { AddTaskBtn, ColumnHeadBar, ColumnTasksList } from './TasksColumnItems';
import { useSelector } from 'react-redux';


const TasksColumn = ({ tasks, title }) => {
  const theme = useSelector(state => state.theme); 
  const backgroundColor = theme === 'light' ? '#fff' : '#21222C';
  
  return (
    <TaskItem  backgroundColor={backgroundColor }>
      <ColumnHeadBar title={title} />
      <ColumnTasksList tasks={tasks} title={title} />
      <AddTaskBtn />
    </TaskItem>
  );
};

export default TasksColumn;

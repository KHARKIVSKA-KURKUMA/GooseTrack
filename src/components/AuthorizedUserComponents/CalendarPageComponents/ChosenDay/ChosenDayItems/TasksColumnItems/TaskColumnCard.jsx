import TaskToolbar from './TaskToolbar';
import { useSelector } from 'react-redux';
import {
  Avatar,
  BottomContainer,
  CardContainer,
  Description,
  Priority,
  TaskMeta,
} from './TaskColumnCardStyle';
// import {
//   Priority,
//   Avatar,
//   Description,
//   BottomContainer,
//   CardContainer,
//   TaskMeta,
// } from './TaskColumnItems.styled';

const TaskColumnCard = (data, title) => {
  const theme = useSelector(state => state.theme);
  const backgroundColor = theme === 'light' ? '#F7F6F9' : '#21222C';
  const textTask = theme === 'light' ? '#111' : '#FFF';
  const { description, avatarUrl, priority } = data;
  return (
    <CardContainer  backgroundColor={ backgroundColor } textTask={textTask}>
      <Description>{description}</Description>
      <BottomContainer>
        <TaskMeta>
          <Avatar src={avatarUrl} alt="User Avatar" />
          <Priority style={{ backgroundColor: getPriorityColor(priority) }}>
            {priority}
          </Priority>
        </TaskMeta>
        <TaskToolbar task={data} title={title} />
      </BottomContainer>
      {/* <TaskModal /> */}
    </CardContainer>
  );
};

const getPriorityColor = priority => {
  if (priority === 'high') return '#EA3D65';
  if (priority === 'medium') return '#F3B249';
  if (priority === 'low') return '#72C2F8';
};

export default TaskColumnCard;

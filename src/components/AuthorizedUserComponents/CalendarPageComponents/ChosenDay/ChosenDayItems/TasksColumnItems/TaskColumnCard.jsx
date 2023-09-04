import TaskToolbar from './TaskToolbar';
import {
  Priority,
  Avatar,
  Description,
  BottomContainer,
  CardContainer,
  TaskMeta,
} from './TaskColumnItems.styled';

const TaskColumnCard = (data, title) => {
  const { description, avatarUrl, priority } = data;
  return (
    <CardContainer>
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

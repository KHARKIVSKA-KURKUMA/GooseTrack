import styled from 'styled-components';

const TaskItem = styled.li`
  flex: 0 0 335px;
  &:first-child {
    margin-left: 20px;
  }
  &:last-child {
    margin-right: 20px;
  }

  padding-right: 18px;
  padding-left: 18px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);

  background-color: ${props => props.backgroundColor};

  @media screen and (min-width: 768px) {
    flex: 0 0 344px;
    &:first-child {
      margin-left: 32px;
    }
    &:last-child {
      margin-right: 32px;
    }
  }

  @media screen and (min-width: 1440px) {
    flex: 0 0 344px;
    margin-left: 0px;

    &:first-child {
      margin-left: 0px;
    }

    &:last-child {
      margin-right: 0px;
    }
  }
  /* overflow: hidden; */
`;
export { TaskItem };

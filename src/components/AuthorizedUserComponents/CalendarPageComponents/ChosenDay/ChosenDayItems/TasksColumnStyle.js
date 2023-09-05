import styled from 'styled-components';

const TaskItem = styled.li`
  width: 344px;
  flex: 0 0 100%;
  padding-right: 18px;
  padding-left: 18px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);

  background-color: #ffffff;

  flex-direction: column;
  &:not(:last-child) {
    margin-right: 20px;
  }

  max-height: 568px;
  @media screen and (min-width: 768px) {
    flex: 0 0 344px;
    &:not(:last-child) {
      margin-right: 16px;
    }
  }

  @media screen and (min-width: 1440px) {
    flex: 0 0 344px;
    &:not(:last-child) {
      margin-right: 27px;
    }
  }
  /* overflow: hidden; */
`;
export { TaskItem };

import styled from 'styled-components';
const TaskColumnList = styled.ul`
  display: flex;
  padding: 0px;
  padding-bottom: 44px;
  gap: 16px;
  overflow: auto;
  width: 100%;
  cursor: default;

  @media screen and (min-width: 768px) {
    overflow-x: auto;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 27px;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f2f2f2;

    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;

    background-color: #cccccc;
  }

  ::-webkit-scrollbar-track:hover {
    box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.1);
  }
`;

export { TaskColumnList };

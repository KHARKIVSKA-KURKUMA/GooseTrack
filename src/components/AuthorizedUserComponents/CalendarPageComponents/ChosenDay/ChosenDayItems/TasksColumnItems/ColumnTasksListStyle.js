import styled from 'styled-components';

/* ---------------------------- Task Column List ---------------------------- */
const TaskColumnContainer = styled.ul`
  overflow-y: auto;
  max-height: 374px;

  list-style: none;
  position: relative;

  z-index: 0;

  flex-grow: 1;

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

export { TaskColumnContainer };

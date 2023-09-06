import styled from 'styled-components';

const ToolbarWrapper = styled.div`
  margin-bottom: 24px;
  margin-left: 18px;
  margin-right: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    margin-left: 32px;
    margin-right: 32px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
    margin-left: 290px;
    margin-right: 32px;
  }
`;

export { ToolbarWrapper };

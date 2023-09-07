import styled from 'styled-components';

const CardContainer = styled.li`
  border-radius: 8px;
  width: 100%;
  padding: 14px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background-color: ${props => props.backgroundColor};
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    /* width: 301px; */
  }
`;

const Description = styled.p`
  color: ${props => props.textTask};
  font-family: 'Inter';
  font-weight: 500;
  line-height: 1.28;
  margin-bottom: 32px;
  margin-top: 0;
  font-size: 14px;
  max-width: 200px;

  @media screen and (min-width: 375px) {
    max-width: 256px;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const TaskMeta = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.8px solid #3e85f3;

  margin-right: 8px;
  overflow: hidden;
  display: block;
  /* height: auto; */
  align-self: safe;
  justify-content: flex-start;
`;

const Priority = styled.p`
  margin: 0;
  font-size: 10px;
  font-family: 'Inter';
  height: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: #f7f6f9;

  padding: 0 12px 0 12px;
  font-weight: 600;
  line-height: 0.83;
  align-self: flex-end;
  margin-right: auto;
`;

export {
  CardContainer,
  Description,
  BottomContainer,
  TaskMeta,
  Avatar,
  Priority,
};

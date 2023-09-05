import styled from 'styled-components';
import { ReactComponent as Plus } from '../../../../../../img/tasks-svg/plus.svg';

/* -------------------------------- Head Bar -------------------------------- */
const HeadBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 18px 35px 18px;
`;

const HeadBarTitle = styled.p`
  margin: 0;
  font-size: 20px;
  font-family: 'Inter';
  font-weight: 700;
  line-height: 1.1;
`;

const HeadBarAddBtn = styled(Plus)`
  width: 22px;
  height: 22px;
  cursor: pointer;
  stroke: ${props => props.color};
  transition: stroke 250ms linear;
  &:hover {
    stroke: #3e85f3;
  }
`;

export { HeadBarContainer, HeadBarTitle, HeadBarAddBtn };

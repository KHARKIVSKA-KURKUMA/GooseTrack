import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  background: var(--auth-background-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 375px) {
    padding: 10px;
  }
`;

const GooseContainerRight = styled.div`
  display: none;
  position: absolute;
  right: 0;
  bottom: 0;
  @media (min-width: 1400px) {
    display: block;
  }
`;
const GooseContainerLeft = styled.div`
  display: none;
  position: absolute;
  left: 0;
  bottom: 0;
  @media (min-width: 1400px) {
    display: block;
  }
`;
const MsgContainerRight = styled.div`
  position: absolute;
  width: 177px;
  right: 80px;
  top: -40px;
`;
const MsgContainerLeft = styled.div`
  position: absolute;
  width: 177px;
  left: 80px;
  top: -40px;
  transform: rotate(-40deg);
`;

const StyledMsgGooseText = styled.p`
  width: 140px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%) rotate(18deg);

  color: var(--descr-color);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 114%;
`;
const StyledSpan = styled.span`
  color: var(--title-color);

  font-style: italic;
`;

const ImageGoose = styled.img`
  /* display:none;
	position:absolute;
	right: 0;
	bottom: 0;
	@media(min-width:768px) {
		display:block;
	} */
`;

export {
  Section,
  GooseContainerRight,
  GooseContainerLeft,
  MsgContainerRight,
  MsgContainerLeft,
  ImageGoose,
  StyledMsgGooseText,
  StyledSpan,
};

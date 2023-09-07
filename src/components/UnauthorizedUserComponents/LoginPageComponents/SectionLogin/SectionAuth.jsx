import {
  ImageGoose,
  GooseContainerRight,
  GooseContainerLeft,
  Section,
  StyledMsgGooseText,
  StyledSpan,
  MsgContainerRight,
  MsgContainerLeft,
} from './SectionAuth.styled';
import loginGoose from 'img/loginGoose.png';
import registerGoose from 'img/registerGoose.png';
import msgGoose from 'img/msgGoose.svg';
import { useLocation } from 'react-router-dom';

const SectionAuth = ({ children }) => {
  const { pathname } = useLocation();

  const srcImage = pathname === '/login' ? loginGoose : registerGoose;

  return (
    <Section>
      {children}
      {pathname === '/login' ? (
        <GooseContainerRight>
          <MsgContainerRight>
            <StyledMsgGooseText>
              Quickly <StyledSpan>come in</StyledSpan> and write down your tasks
              for the day!
            </StyledMsgGooseText>
            <ImageGoose src={msgGoose} alt="goose" />
          </MsgContainerRight>
          <ImageGoose src={srcImage} alt="goose" />
        </GooseContainerRight>
      ) : (
        <GooseContainerLeft>
          <MsgContainerLeft>
            <StyledMsgGooseText>
              Quickly <StyledSpan>register</StyledSpan> and familiarize yourself
              with the application!
            </StyledMsgGooseText>
            <ImageGoose src={msgGoose} alt="goose" />
          </MsgContainerLeft>
          <ImageGoose src={srcImage} alt="goose" />
        </GooseContainerLeft>
      )}
    </Section>
  );
};

export default SectionAuth;

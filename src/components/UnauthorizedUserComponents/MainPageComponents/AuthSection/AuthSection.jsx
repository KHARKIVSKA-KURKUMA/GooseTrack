import { FiLogIn } from 'react-icons/fi';

import {
  Container,
  StyledHero,
  StyledImg,
  HeroTitle,
  HeroTitleSpan,
  AuthBlock,
  LoginLink,
  SignupLink,
} from './AuthSection.styled';

import logoMobile from '../../../../img/mobile/goose1x.png';
import logoMobile2x from '../../../../img/mobile/goose2x.png';
import logoMobile3x from '../../../../img/mobile/goose3x.png';

import logoTablet from '../../../../img/tablet/goose1x.png';
import logoTablet2x from '../../../../img/tablet/goose2x.png';
import logoTablet3x from '../../../../img/tablet/goose3x.png';

import logo from '../../../../img/desktop/goose1x.png';
import logo2x from '../../../../img/desktop/goose2x.png';
import logo3x from '../../../../img/desktop/goose3x.png';

const AuthSection = ({ isHomePage }) => {
  return (
    <Container>
      <StyledHero>
        <StyledImg>
          <source
            media="(max-width: 767px)"
            srcSet={`${logoMobile} 1x, ${logoMobile2x} 2x, ${logoMobile3x} 3x`}
          />
          <source
            media="(min-width: 768px) and (max-width: 1439px)"
            srcSet={`${logoTablet} 1x, ${logoTablet2x} 2x, ${logoTablet3x} 3x`}
          />
          <source
            media="(min-width: 1440px)"
            srcSet={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x`}
          />
          <img src={logoMobile} alt="Logo goose" />
        </StyledImg>
        <HeroTitle>
          G<HeroTitleSpan>oo</HeroTitleSpan>seTrack
        </HeroTitle>
        <AuthBlock>
          <LoginLink to="/login">
            Login <FiLogIn style={{ marginLeft: 6, width: 18, height: 18 }} />
          </LoginLink>
          <SignupLink to="/register">Sign up</SignupLink>
        </AuthBlock>
      </StyledHero>
    </Container>
  );
};

export default AuthSection;

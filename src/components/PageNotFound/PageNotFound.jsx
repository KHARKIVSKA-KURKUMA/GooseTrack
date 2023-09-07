import {
  Container,
  LogoContainer,
  NumberFirst,
  NumberSecond,
  Text,
  ButtonContainer,
  Button,
  Picture,
} from './PageNotFound.styled';

import logoMobile from '../../img/mobile/gooseError1x.png';
import logoMobile2x from '../../img/mobile/gooseError2x.png';
import logoMobile3x from '../../img/mobile/gooseError3x.png';

import logoTablet from '../../img/tablet/gooseError1x.png';
import logoTablet2x from '../../img/tablet/gooseError2x.png';

import logo from '../../img/desktop/gooseError1x.png';
import logo2x from '../../img/desktop/gooseError2x.png';

const PageNotFound = () => {
  return (
    <Container>
      <LogoContainer>
        <NumberFirst>4</NumberFirst>
        <Picture>
          <source
            media="(max-width: 767px)"
            srcSet={`${logoMobile} 1x, ${logoMobile2x} 2x, ${logoMobile3x} 3x`}
          />
          <source
            media="(min-width: 768px) and (max-width: 1439px)"
            srcSet={`${logoTablet} 1x, ${logoTablet2x} 2x`}
          />
          <source
            media="(min-width: 1440px)"
            srcSet={`${logo} 1x, ${logo2x} 2x`}
          />
          <img src={logoMobile} alt="Logo goose" />
        </Picture>
        <NumberSecond>4</NumberSecond>
      </LogoContainer>
      <Text>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </Text>
      <ButtonContainer>
        <Button to={`/calendar`}>Back to home</Button>
      </ButtonContainer>
    </Container>
  );
};

export default PageNotFound;

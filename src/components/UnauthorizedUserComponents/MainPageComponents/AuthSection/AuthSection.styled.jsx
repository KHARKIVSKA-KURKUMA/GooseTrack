import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div``;

const StyledHero = styled.header`
  position: relative;

  background-color: #3e85f3;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HeroTitle = styled.h1`
  color: white;
  margin: 0;
  margin-bottom: 32px;
  font-family: 'Coolvetica';
  font-size: 44px;
  line-height: 1.09;
  font-weight: 700;
  text-shadow: #00000009;

  @media (min-width: 768px) {
    
  }
`;

const StyledImg = styled.picture`
  width: 142px;
  display: block;

  @media (min-width: 768px) {
   
  }
`;

const HeroTitleSpan = styled.span`
  font-family: 'Coolvetica';
  font-style: italic;
  font-size: 44px;
  line-height: 1.09;
  font-weight: 700;
  text-shadow: #00000009;

  @media (min-width: 768px) {
  }
`;


const AuthBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (min-width: 768px) {
    
  }
`;

const LoginLink = styled(NavLink)`
  padding: 14px 32px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  color:  #3e85f3;
  background-color: white;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

`;

const SignupLink = styled(NavLink)`
  padding: 14px 32px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: underline;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  color: #ffffff;
  background-color:transparent;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export {
  Container,
  StyledHero,
  HeroTitle,
  StyledImg,
  HeroTitleSpan,
  AuthBlock,
LoginLink,
  SignupLink
};

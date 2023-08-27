import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NumberFirst = styled.span`
  font-size: 100px;
  font-weight: 700;
  color: var(--title-color);
  position: relative;
   left: 30px;
  top: -10px;

  @media screen and (min-width: 768px) {
    font-size: 200px;
      left: 70px;
  top: -20px;
  }
`;

const NumberSecond = styled.span`
  font-size: 100px;
  font-weight: 700;
  color: var(--title-color);
  position: relative;
   left: -30px;
  top: -10px;

  @media screen and (min-width: 768px) {
    font-size: 200px;
    left: -70px;
  top: -20px;
  }
`;

const Text = styled.span`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: var(--descr-color);

  @media screen and (min-width: 375px) {
    width: 281px;
    height: 54px;
  }

  @media screen and (min-width: 768px) {
    width: 387px;
    height: 36px;
  }
`;

const Button = styled.button`
  margin-top: 25px;
  width: 153px;
  height: 46px;
  border: 0;
  border-radius: 16px;
  color: #fff;
  background-color: var(--btn-background-color);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    transform: scale(1.01);
    background-color: var(--btn-hover-background-color);
  }

  @media screen and (min-width: 768px) {
    width: 211px;
    height: 56px;
    font-size: 18px;
  }
`;

const Picture = styled.picture`
  @media screen and (min-width: 1440px) {
    width: 368.5px;
  }
`;

export { Container, LogoContainer, NumberFirst, NumberSecond, Text, Button, Picture };
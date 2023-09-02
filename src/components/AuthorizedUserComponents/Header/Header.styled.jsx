import styled from 'styled-components';

const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 24px 20px 64px 20px;
  background: ${({ theme }) => theme.headerBackground};
  @media (min-width: 768px) {
    padding: 30px 32px 16px 32px;
  }
  @media (min-width: 1440px) {
    padding-top: 40px;
  }
`;
const HeaderTitleContainer = styled.div`
  display: none;
  @media (min-width: 1440px) {
    margin-right: auto;
    display: block;
    margin-left: 289px;
  }
`;
const HeaderTitle = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.text};
  text-shadow: 0px 10px 58px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  color: #111111;
`;
const BurgerToggle = styled.div`
  display: flex;
  width: 30px;
  height: 20px;
  margin-right: auto;
  align-items: center;
  margin-left: 8px;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export { Container, HeaderTitle, HeaderTitleContainer, BurgerToggle };

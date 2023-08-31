import styled from 'styled-components';

const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 24px 20px 64px 20px;
  background: ${({ theme }) => theme.headerBackground};
  height: 116px;

  @media (min-width: 768px) {
    padding: 40px 32px 16px 32px;
  }

  @media (min-width: 1440px) {
    padding: 40px 32px 16px 32px;
  }
`;
const HeaderTitleContainer = styled.div`
  margin-right: auto;
  margin-left: 289px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const HeaderTitle = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.text};
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;
const BurgerToggle = styled.div`
display: flex;
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  div {
    width: 30px;
    height: 3px;
    background-color: ${({ theme }) => theme.textSidebar};
  }
  @media (max-width: 768px) {
    
    margin-right: auto;
    margin-left: 8px;
  }

  @media screen and (min-width: 769px) {
        display: none;
    }
`;

export { Container, HeaderTitle, HeaderTitleContainer, BurgerToggle };

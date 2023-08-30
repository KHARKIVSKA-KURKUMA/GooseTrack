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
    padding: 24px 32px 64px 32px;
  }

  @media (min-width: 1440px) {
    padding: 40px 32px 16px 32px;
  }
`;
const HeaderTitle = styled.div`
  color: ${({ theme }) => theme.text};
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin-right: 20px;
  
`;

export { Container, HeaderTitle };

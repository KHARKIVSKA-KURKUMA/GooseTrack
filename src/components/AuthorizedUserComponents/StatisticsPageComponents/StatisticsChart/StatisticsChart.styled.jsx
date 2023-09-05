import styled from 'styled-components';

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  transform: translateX(20px);
  padding: 45px 15px;
  border: 1px solid #e3f3ff;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    padding: 35px;
    transform: translateX(65px);
  }

  @media screen and (min-width: 1440px) {
    padding: 45px 40px;
    transform: translateX(365px);
  }
`;

export { ChartContainer };

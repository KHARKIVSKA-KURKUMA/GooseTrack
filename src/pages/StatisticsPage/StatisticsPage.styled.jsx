import styled from 'styled-components';

const StatisticsContainer = styled.div`
  width: 335px;
  height: 684px;
  padding: 30px 15px 0px;
  border: 1px solid #9664e2; // !!!!!!!!!!!!! потім цей бордер необхідно прибрати !!!!!!!!!!!!!!!!!
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 854px;
    padding: 132px 32px 0px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
    height: 752px;
    padding: 134px 113px 0px;
  }
`;

export { StatisticsContainer };
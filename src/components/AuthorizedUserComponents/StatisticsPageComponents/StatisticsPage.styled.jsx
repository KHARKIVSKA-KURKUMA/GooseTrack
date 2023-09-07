import styled from 'styled-components';

const StatisticsContainer = styled.div`
  min-width: 335px;
  height: 684px;
  margin: 0 15px 40px;
  padding: 30px 15px 0px;
  border-radius: 16px;
  background-color: var(--primary-background-color);

  @media screen and (min-width: 768px) {
    min-width: 704px;
    min-height: 854px;
    margin: 50px 20px 40px;
    padding: 132px 32px 0px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 1087px;
    min-height: 752px;
    margin: 32px 32px 32px 323px;
    padding: 134px 113px 0px;
  }
`;

export { StatisticsContainer };

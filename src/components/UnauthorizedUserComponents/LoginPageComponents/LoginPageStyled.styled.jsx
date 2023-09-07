import styled from 'styled-components';

const Container = styled.div`
  background: var(--auth-background-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: 100%;
`;
const Section = styled.section`
  min-height: 100vh;
  background: var(--auth-background-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export { Container, Section };

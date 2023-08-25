const { default: styled } = require("styled-components");

const Container = styled.div`
	min-height: 100vh;
	background: var(--auth-background-color);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-left: 20px;
	padding-right: 20px;

  @media (max-width: 375px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`

export { Container };
const { default: styled } = require("styled-components");

const Container = styled.div`
	min-height: 100vh;
	background: #DCEBF7;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-top: 20px;
	padding-bottom: 20px;

  @media (max-width: 375px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`

export { Container };
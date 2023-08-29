import { Field, Form, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { FiLogIn } from 'react-icons/fi';
import { BiErrorCircle } from "react-icons/bi";

// :root {
//   --primary-background-color: #ffffff;
//   --secondary-background-color: #f7f6f9;
//   --auth-background-color: #dcebf7;
//   --btn-background-color: #3e85f3;
//   --low-background-color: #72c2f8;
//   --medium-background-color: #f3b249;
//   --high-background-color: #ea3d65;
//   --title-color: #3e85f3;
//   --subtitle-color: #171820;
//   --descr-color: rgba(17, 17, 17, 0.9);
// }

const Container = styled.div`
/* width: 335px; */
padding: 40px 24px;
background-color:var(--primary-background-color);
margin: 0 auto;
border-radius:8px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 5px, rgba(0, 0, 0, 0.2) 0px 4px 6px;

@media(min-width:768px) {
		width: 480px;
	}
`;

const StyledForm = styled(Form)`
	width: 100%;
	padding-top:32px;
	
`;

const StyledField = styled(Field)`
	padding: 14px;
	height: 46px;
	width: 100%;
	color: #111;
	font-family: Inter;
	font-size: 14px;
	border-radius: 8px;
	border: 1px solid rgba(220, 227, 229, 0.60);
	background: var(--primary-background-color);
	line-height: 128%;
	margin-top: 8px;
	&::placeholder{
		color:#DCE3E5
	}
	&:focus, &:hover {
		border: 1px solid #111;
		outline:none;
	}
`;

const StyledLabel = styled.label`
	display:block;
	color: #111;
	font-family: Inter;
	font-size: 12px;
	font-style: normal;
	font-weight: 600;
	margin-top: 24px;
		&:first-child {
			margin-top: 0;
		}
`

const StyledFormTitle = styled.h2`
	font-size:18px;
	margin: 0;
`;

const StyledBtn = styled.button`
	display: flex;
	flex-direction:row;
	align-items: center;
	justify-content: center;
	padding:14px 0;
	column-gap:11px;
	cursor:pointer;
	/* height: 46px; */
	width: 100%;
	border:none;
	background-color:var(--btn-background-color);
	border-radius: 16px;
	box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
	color: #fff;

	margin-top: 32px;

	&:hover, &:focus {
		background: var(--btn-hover-background-color);
	}
	
`
const StyledTextBtn = styled.span `
	
	font-family: Inter;
	font-size: 14px;
	font-style: normal;
	font-weight: 600;
	line-height: 18px; /* 128.571% */
	letter-spacing: -0.28px;
`

const StyledFiLogIn = styled(FiLogIn)`

	width: 18px;
	height: 18px;
`

const StyledIconError = styled(BiErrorCircle)`
	
`;

const StyledError = styled(ErrorMessage)

export { Container, StyledField, StyledForm, StyledFormTitle, StyledLabel, StyledBtn, StyledTextBtn,StyledFiLogIn, StyledIconError, StyledError };

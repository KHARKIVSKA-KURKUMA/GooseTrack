import { Field, Form } from 'formik';
import styled from 'styled-components';


const Container = styled.div`
width: 335px;
padding: 40px 24px;
background-color:#fff;
margin: 0 auto;
border-radius:8px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 5px, rgba(0, 0, 0, 0.2) 0px 4px 6px;
`;

const StyledForm = styled(Form)`
	width: 100%;
	padding-top:32px;
`;

const StyledField = styled(Field)`
	height: 20px;
	color:red;
	width: 100%;
`;

const StyledFormTitle = styled.h2`
	font-size:18px;
	margin: 0;
`;

export { Container, StyledField, StyledForm, StyledFormTitle };

import { Field, Form } from 'formik';
import styled from 'styled-components';
import { FiLogIn } from 'react-icons/fi';
import { BiErrorCircle } from 'react-icons/bi';

const Container = styled.div`
  padding: 40px 24px;
  background-color: var(--primary-background-color);
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 5px, rgba(0, 0, 0, 0.2) 0px 4px 6px;

  @media (min-width: 768px) {
    width: 480px;
  }
  @media (max-width: 768px) {
    width: 335px;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;

const StyledForm = styled(Form)`
  width: 100%;
  padding-top: 32px;
  position: relative;
`;

const StyledField = styled(Field)`
  padding: 14px;
  height: 46px;
  width: 100%;
  color: #111;
  font-family: Inter;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.6);
  background: var(--primary-background-color);
  line-height: 128%;
  &::placeholder {
    color: #dce3e5;
  }
  &:focus,
  &:hover {
    border: 1px solid #111;
    outline: none;
  }
`;

const StyledLabel = styled.label`
  position: relative;
  display: block;
  color: #111;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  margin-top: 24px;
  &:first-child {
    margin-top: 0;
  }
`;

const StyledFormTitle = styled.h2`
  font-size: 18px;
  margin: 0;
  color: var(--title-color);
`;

const StyledBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
  column-gap: 11px;
  width: 100%;
  border: none;
  background-color: var(--btn-background-color);
  border-radius: 16px;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  color: #fff;

  margin-top: 32px;
  transition: background-color 0.3s;
  &:disabled {
    background-color: gray;
  }
  &:not(:disabled) {
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: var(--btn-hover-background-color);
    }
  }
`;
const StyledTextBtn = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

const StyledFiLogIn = styled(FiLogIn)`
  width: 18px;
  height: 18px;
`;

const StyledIconError = styled(BiErrorCircle)``;

const StyledError = styled.span`
  position: fixed;
`;

export {
  Container,
  StyledField,
  StyledForm,
  StyledFormTitle,
  StyledLabel,
  StyledBtn,
  StyledTextBtn,
  StyledFiLogIn,
  StyledIconError,
  StyledError,
};

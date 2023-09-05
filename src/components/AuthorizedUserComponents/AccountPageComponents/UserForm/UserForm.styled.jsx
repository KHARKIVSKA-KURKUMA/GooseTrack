import { Field, Form, ErrorMessage} from 'formik';
import styled from 'styled-components';
import { ReactComponent as Icon } from 'img/add.svg';
import { ReactComponent as IconError } from 'img/ic_baseline-error-outline.svg';
import { ReactComponent as IconCorrect } from 'img/Done.svg';
import {
  space,
  layout,
  color,
  flexbox,
  position,
  border,
  shadow,
  grid,
} from 'styled-system';

export const Box = styled.div(
  space,
  layout,
  color,
  flexbox,
  position,
  border,
  shadow,
  grid
);



export const MessageError = styled(ErrorMessage)`
  display: block;
  color: red;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  max-width: 354px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: calc((14 / 12) * 100%);
  color: #111111;

  @media (min-width: 768px) {
    width: 354px;
    font-size: 14px;
    line-height: calc((18 / 14) * 100%);
  }
`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  column-gap: 50px;
  align-items: center;
  max-width: 100%;
  margin-top: 40px;

  @media (min-width: 960px) {
    margin-bottom: 44px;
  }

  @media (min-width: 1150px) {
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 195px;
  height: 46px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  background-color: #3e9ff3;
  color: #FFFFFF;
  /* transition: ;*/
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #3E85F3;
  };
  &:disabled{
    background-color: #CAE8FF;
  }
  @media (min-width: 960px) {
    margin-top: 88px;
  }
`;



export const Title = styled.h2`
  margin: 0;
  margin-top: 8px;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  /* transition: ; */
  color: #343434;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: calc((18 / 18) * 100%);
  }
`;
export const Name = styled.h2`
  margin: 0;
  margin-top: 20px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: calc((18 / 14) * 100%);
  /* transition: ; */
  color: #343434;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: calc((18 / 18) * 100%);
  }
`;


export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const InputImg = styled.input`
  display: none;
`;

export const AddIcon = styled(Icon)`
  width: 100%;
  height: 100%;
  display: block;
  /* transition:; */
  fill: #3E85F3;
  &:hover,
  &:focus {
    fill: #3e9ff3;
  }
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 147px;
    left: 52%;
  }
  @media (min-width: 1440px) {
    top: 170px;
    left: 51%;
  }
`;

export const ErrorIcon = styled(IconError)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const CorrectIcon = styled(IconCorrect)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const WrapImg = styled.div`
  width: 72px;
  height: 72px;
  margin: 0 auto;
  border: 1px solid  #3E85F3;
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;



export const Sticker = styled.label`
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #e0e0e0;
  cursor: pointer;
  position: absolute;
  top: 85%;
  right: 20%;


  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const Input = styled(Field)`
  height: 42px;
  width:100%;
  border-radius: 8px;
  border-width: 1px;
  padding: 0 14px;
  border-color: #111111;
  background-color: transparent;
  color: #111111;
  /* transition:; */
  font-family: 'InterSemiBolt';
  font-weight: 600;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);

  &::placeholder {
    color: #111111;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: calc((18 / 16) * 100%);
  }
`;

export const AccountForm = styled(Form)`
  padding: 40px 18px;
  /* transition:; */
  background-color: #FFFFFF;
  border-radius: 16px;
  height: 100%;

  @media (min-width: 960px) {
    padding: 60px 18px;
  }
`;

export const IconStatusWrap = styled.div`
  position: relative;
  height: 46px;
  @media (min-width: 768px) {
    height: 46px;
  }
`;

export const CorrectTag = styled.div`
  color: #3cbc81;
  margin-top: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;



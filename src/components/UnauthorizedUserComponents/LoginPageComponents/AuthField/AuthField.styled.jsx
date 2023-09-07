import styled from 'styled-components';
import { ErrorMessage } from 'formik';

import { ReactComponent as IconError } from 'img/ic_baseline-error-outline.svg';
import { ReactComponent as IconCorrect } from 'img/Done.svg';

export const IconStatusWrap = styled.div`
  position: relative;
  height: 46px;
  @media (min-width: 768px) {
    height: 46px;
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

export const CorrectTag = styled.div`
  color: #3cbc81;
  margin-top: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  position: absolute;
  bottom: -15px;
`;

export const MessageError = styled(ErrorMessage)`
  display: block;
  color: red;
  position: absolute;
  bottom: -15px;
`;

export const StyledVisibleButton = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

  padding: 0;
  border: none;
  font-size: 18px;
  color: inherit;
  background-color: transparent;

  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--title-color);
  }
`;

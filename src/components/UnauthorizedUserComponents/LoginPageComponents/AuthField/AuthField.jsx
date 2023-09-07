import { VscEye, VscEyeClosed } from 'react-icons/vsc';

import {
  MessageError,
  IconStatusWrap,
  ErrorIcon,
  CorrectIcon,
  CorrectTag,
  StyledVisibleButton,
} from 'components/UnauthorizedUserComponents/LoginPageComponents/AuthField/AuthField.styled';
import { StyledField, StyledLabel } from '../LoginForm/LoginForm.styled';
import { useState } from 'react';

export const AuthField = ({
  touched,
  errors,
  title,
  type,
  name,
  placeholder = null,
}) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const pass = type === 'password' ? type : null;
  const eyeVisible = isVisiblePassword ? <VscEyeClosed /> : <VscEye />;

  const togglePasswordVisible = () => setIsVisiblePassword(prev => !prev);

  return (
    <StyledLabel
      style={{
        color:
          (touched && errors && '#E74A3B') || (touched && !errors && '#3CBC81'),
        borderColor:
          (touched && errors && '#E74A3B') || (touched && !errors && '#3CBC81'),
      }}
    >
      {title}{' '}
      <IconStatusWrap>
        <StyledField
          type={pass ? (isVisiblePassword ? 'text' : pass) : type}
          name={name}
          placeholder={placeholder}
          style={{
            color:
              (touched && errors && '#E74A3B') ||
              (touched && !errors && '#3CBC81'),
            borderColor:
              (touched && errors && '#E74A3B') ||
              (touched && !errors && '#3CBC81'),
          }}
        />

        {pass
          ? pass && (
              <StyledVisibleButton
                type="button"
                onClick={togglePasswordVisible}
              >
                {eyeVisible}
              </StyledVisibleButton>
            )
          : touched && errors && <ErrorIcon />}
        {pass ? null : touched && !errors && <CorrectIcon />}
      </IconStatusWrap>
      {touched && !errors && <CorrectTag>This is an CORRECT {name}</CorrectTag>}
      <MessageError name={name} component="p" />
    </StyledLabel>
  );
};

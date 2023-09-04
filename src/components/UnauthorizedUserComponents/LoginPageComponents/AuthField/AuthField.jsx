import {
  MessageError,
  IconStatusWrap,
  ErrorIcon,
  CorrectIcon,
  CorrectTag,
} from 'components/UnauthorizedUserComponents/LoginPageComponents/AuthField/AuthField.styled';
import { StyledField, StyledLabel } from '../LoginForm/LoginForm.styled';

export const AuthField = ({
  touched,
  errors,
  title,
  type,
  name,
  placeholder = null,
}) => {
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
          type={type}
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
        {touched && errors && <ErrorIcon />}
        {touched && !errors && <CorrectIcon />}
      </IconStatusWrap>
      {touched && !errors && <CorrectTag>This is an CORRECT {name}</CorrectTag>}
      <MessageError name={name} component="p" />
    </StyledLabel>
  );
};

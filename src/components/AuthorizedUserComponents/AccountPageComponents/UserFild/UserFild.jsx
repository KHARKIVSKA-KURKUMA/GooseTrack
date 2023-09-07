import {
  Input,
  MessageError,
  Label,
  IconStatusWrap,
  ErrorIcon,
  CorrectIcon,
  CorrectTag,
} from 'components/AuthorizedUserComponents/AccountPageComponents/UserForm/UserForm.styled';
import { useSelector } from 'react-redux';

export const UserFild = ({
  touched,
  errors,
  title,
  type,
  name,
  placeholder = null,
  values,
}) => {
  const theme = useSelector(state => state.theme);
  const colorTitle = theme === 'light' ? '#111' : 'rgba(250, 250, 250, 0.30)';
  const colorInput = theme === 'light' ? '#111111' : '#FFFFFF';
  const borderColorInput =
    theme === 'light' ? 'rgba(17, 17, 17, 0.15)' : 'rgba(255, 255, 255, 0.15)';
  return (
    <Label
      colorTitle={colorTitle}
      style={{
        color:
          (touched && errors && '#E74A3B') || (touched && !errors && '#3CBC81'),
        borderColor:
          (touched && errors && '#E74A3B') || (touched && !errors && '#3CBC81'),
      }}
    >
      {title}{' '}
      <IconStatusWrap>
        <Input
          border={borderColorInput}
          color={colorInput}
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
      {touched && !errors && values.length > 0 && (
        <CorrectTag>This is an CORRECT {name}</CorrectTag>
      )}
      <MessageError name={name} component="p" />
    </Label>
  );
};

import {
  Input,
  MessageError,
  Label,
  IconStatusWrap,
  ErrorIcon,
  CorrectIcon,
  CorrectTag,
} from 'components/AuthorizedUserComponents/AccountPageComponents/UserForm/UserForm.styled';

export const UserFild = ({
  touched,
  errors,
  title,
  type,
  name,
  placeholder = null,
  values,
}) => {
  return (
    <Label
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
      {touched && !errors && values.length>0 && <CorrectTag>This is an CORRECT {name}</CorrectTag>}
      <MessageError name={name} component="p" />
    </Label>
  );
};

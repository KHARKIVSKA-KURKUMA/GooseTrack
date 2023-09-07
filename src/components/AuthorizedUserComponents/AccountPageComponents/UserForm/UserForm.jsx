import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'store/user/selectors';
import { Formik } from 'formik';
import { UserFild } from '../UserFild';
import { toast } from 'react-toastify';
import { userSchema } from '../schemas/userSchema';
import { fetchCurrentUser, updateUser } from 'store/user/operations';
import {
  Wrapper,
  Wrap,
  Button,
  Title,
  Img,
  InputImg,
  AddIcon,
  WrapImg,
  Sticker,
  Box,
  AccountForm,
  Name,
  LoaderContainer,
  Label,
  DatePickerStyled,
  PopperDateStyles,
} from './UserForm.styled';
import getCurrentDate from 'helpers/currentDay';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Loader from '../../../Loader/Loader';
const currentDate = getCurrentDate();

const UserForm = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [isFormChanged, setIsFormChanged] = useState(false);
  const isFulfilled = useSelector(state => state.user.isFulfilled);
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);

  const [isLoading, setIsLoading] = useState(true);
  const theme = useSelector(state => state.theme);
  const backgroundUserForm = theme === 'light' ? '#FFF' : '#21222C';
  const colorTitleUserName = theme === 'light' ? '#343434' : '#FFF';
  const colorTitleUser =
    theme === 'light' ? '#343434' : 'rgba(250, 250, 250, 0.30)';
  const colorTitle = theme === 'light' ? '#111' : 'rgba(250, 250, 250, 0.30)';
  const colorInput = theme === 'light' ? '#111111' : '#FFFFFF';
  const borderColorInput =
    theme === 'light' ? 'inherit' : 'rgba(255, 255, 255, 0.15)';
  const refreshToken = localStorage.getItem('refreshToken');
  useEffect(() => {
    dispatch(fetchCurrentUser())
      .then(() => {
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Помилка завантаження даних:', error);
      });
  }, [dispatch, refreshToken]);

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  const handleImageChange = async e => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      return;
    }
    const imageUrl = URL.createObjectURL(selectedFile);
    setImagePreview(imageUrl);
    setImageUpload(selectedFile);
    setIsFormChanged(true);
  };

  const { name, birthday, email, phone, skype, avatarURL } = userInfo;
  const handleSubmit = async values => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    if (values.phone) {
      formData.append('phone', values.phone);
    }
    if (values.skype) {
      formData.append('skype', values.skype);
    }
    if (values.birthday) {
      formData.append('birthday', dayjs(values.birthday).format('YYYY/MM/DD'));
    }
    if (imageUpload) {
      formData.append('avatar', imageUpload);
    }

    try {
      await dispatch(updateUser(formData));
      await dispatch(fetchCurrentUser());
      setIsFormChanged(false);
      toast.success('Profile data changed successfully');
    } catch {
      toast.error('Something went wrong... Try again!');
    }
  };
  if (isFulfilled) {
    return (
      <Formik
        initialValues={{
          name: name || '',
          birthday: birthday || '',
          email: email || '',
          phone: phone || '',
          skype: skype || '',
          avatarURL: avatarURL || '',
        }}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, dirty, touched, errors }) => (
          <AccountForm background={backgroundUserForm}>
            <Box
              position="relative"
              display="block"
              m="0 auto"
              width="max-content"
            >
              <WrapImg>
                {' '}
                {imagePreview ? (
                  <Img src={imagePreview} alt="Avatar Preview" />
                ) : (
                  <Img src={avatarURL} alt="Avatar" />
                )}
              </WrapImg>

              <InputImg
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                id="add-image"
              />
              <Sticker htmlFor="add-image">
                <AddIcon />
              </Sticker>
            </Box>
            <Name colorTitleUser={colorTitleUserName}>{name}</Name>
            <Title colorTitleUser={colorTitleUser}>User</Title>
            <Wrap>
              <Wrapper>
                <UserFild
                  title="User name"
                  type="text"
                  name="name"
                  touched={touched.name}
                  errors={errors.name}
                  values={values.name}
                />
                <Label colorTitle={colorTitle}>
                  Birthday
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePickerStyled
                      color={colorInput}
                      borderColorInput={borderColorInput}
                      name="birthday"
                      type="date"
                      slotProps={{
                        popper: {
                          sx: PopperDateStyles,
                        },
                        textField: {
                          placeholder: birthday || currentDate,
                        },
                      }}
                      views={['year', 'month', 'day']}
                      format="YYYY/MM/DD"
                      closeOnSelect={true}
                      disableFuture={true}
                      onChange={date => {
                        setFieldValue('birthday', date);
                        setIsFormChanged(true);
                      }}
                    />
                  </LocalizationProvider>
                </Label>

                <UserFild
                  title="Email"
                  type="email"
                  name="email"
                  touched={touched.email}
                  errors={errors.email}
                  values={values.email}
                />
              </Wrapper>

              <Wrapper>
                <UserFild
                  title="Phone"
                  type="tel"
                  name="phone"
                  placeholder="Add phone number"
                  touched={touched.phone}
                  errors={errors.phone}
                  values={values.phone}
                />
                <UserFild
                  title="Skype"
                  type="text"
                  name="skype"
                  placeholder="Add a skype nickname"
                  touched={touched.skype}
                  errors={errors.skype}
                  values={values.skype}
                />
              </Wrapper>
            </Wrap>
            <Button type="submit" disabled={!dirty && !isFormChanged}>
              Save changes
            </Button>
          </AccountForm>
        )}
      </Formik>
    );
  }
};

export default UserForm;

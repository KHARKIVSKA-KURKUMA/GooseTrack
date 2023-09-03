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
} from './UserForm.styled';

// import avatar from 'img/avatar.png';
// import { selectorTok } from 'store/auth/authSelectors';

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-0${month}-${year}`;

const UserForm = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  useEffect(() => {
    const getUserInfo = async () => {
      await dispatch(fetchCurrentUser());
      setIsLoading(false);
    };

    getUserInfo();
  }, [dispatch]);

  const handleImageChange = async e => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      return;
    }
    const imageUrl = URL.createObjectURL(selectedFile);
    const formData = new FormData();
    formData.append('avatar', selectedFile);

    await dispatch(updateUser(formData));
    setImagePreview(imageUrl);
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
    formData.append('birthday', values.birthday);
    try {
      setIsLoading(true);
      await dispatch(updateUser(formData));
      await dispatch(updateUser(values));
      await dispatch(fetchCurrentUser());
      toast.success('Profile data changed successfully');

      setIsLoading(false);
    } catch {
      toast.error('Something went wrong... Try again!');
    }
  };
  if (!isLoading) {
    return (
      <Formik
        initialValues={{
          name,
          birthday,
          email,
          phone,
          skype,
          avatarURL,
        }}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        {({ values, dirty, touched, errors }) => (
          <AccountForm>
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
            <Name>{name}</Name>
            <Title>User</Title>
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
                <UserFild
                  title="Birthday"
                  type="text"
                  name="birthday"
                  placeholder={currentDate}
                  touched={touched.birthday}
                  errors={errors.birthday}
                  values={values.birthday}
                />

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
            <Button type="submit" disabled={!dirty}>
              Save changes
            </Button>
          </AccountForm>
        )}
      </Formik>
    );
  }
};

export default UserForm;

// isSubmitting || !isFormChanged

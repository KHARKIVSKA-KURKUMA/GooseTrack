import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
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

import avatar from 'img/avatar.png';





const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-0${month}-${year}`;
const UserForm = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  useEffect(() => {
    const getUserInfo = async () => {
      console.log("hello")
      await dispatch(fetchCurrentUser());
    
    };

    getUserInfo();
  }, [dispatch]);

  // const [fileImage, setFileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(avatar);
  // const [isFormChanged, setIsFormChanged] = useState(false);
  // console.log(isFormChanged);
  const handleImageChange = e => {
    const selectedFile = e.target.files[0];
    // setIsFormChanged(true);
    if (!selectedFile) {
      return;
    }

    const imageUrl = URL.createObjectURL(selectedFile);

    setImagePreview(imageUrl);
    // setFileImage(selectedFile);
  };

  

  const { name, birthday, email, phone, skype} = userInfo;
  console.log(userInfo.name)
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

    // if (values.avatarURL) {
    //   formData.append('avatar', avatarURL);
    // }
    try {
      await dispatch(updateUser(formData));
      await dispatch(updateUser(values));
      toast.success('Profile data changed successfully');
    } catch {
      toast.error('Something went wrong... Try again!');
    }
  };

  return (
    <Formik
      initialValues={{
        name,
        birthday,
        email,
        phone,
        skype,
      }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      {({values, isSubmitting, dirty, touched, errors }) => (
        <AccountForm>
          <Box
            position="relative"
            display="block"
            m="0 auto"
            width="max-content"
          >
            <WrapImg>
              <Img src={imagePreview} alt="Avatar Preview" />
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
          <Name>{values.name}</Name>
          <Title>User</Title>
          <Wrap>
            <Wrapper>
              <UserFild
                title="User name"
                type="text"
                name="name"
                touched={touched.name}
                errors={errors.name}
              />
              <UserFild
                title="Birthday"
                type="text"
                name="birthday"
                placeholder={currentDate}
                touched={touched.birthday}
                errors={errors.birthday}
              />

              <UserFild
                title="Email"
                type="email"
                name="email"
                touched={touched.email}
                errors={errors.email}
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
              />
              <UserFild
                title="Skype"
                type="text"
                name="skype"
                placeholder="Add a skype nickname"
                touched={touched.skype}
                errors={errors.skype}
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
};

export default UserForm;

// isSubmitting || !isFormChanged

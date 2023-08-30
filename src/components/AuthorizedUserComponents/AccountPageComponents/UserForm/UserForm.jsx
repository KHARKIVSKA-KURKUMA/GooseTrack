import { useState } from 'react';
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
import { toast } from 'react-toastify';
import avatar from 'img/avatar.png';
import { Formik } from 'formik';
import { userSchema } from '../schemas/userSchema';
import { UserFild } from '../UserFild';
// const currentDate = dayjs(new Date()).format('YYYY/MM/DD');
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-0${month}-${year}`;
const UserForm = () => {
  // const [name, setName] = useState('');
  // const [birthday, setBirthday] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [skype, setSkype] = useState('');
  // видали коли використаєш сети, це щоб не падав деплой
  const name = '';
  const birthday = '';
  const email = '';
  const phone = '';
  const skype = '';

  const [fileImage, setFileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(avatar);
  const [isFormChanged, setIsFormChanged] = useState(false);
  console.log(isFormChanged);
  const handleImageChange = e => {
    const selectedFile = e.target.files[0];
    setIsFormChanged(true);
    if (!selectedFile) {
      return;
    }

    const imageUrl = URL.createObjectURL(selectedFile);

    setImagePreview(imageUrl);
    setFileImage(selectedFile);
  };

  const handleSubmit = async values => {
    setIsFormChanged(false);
    const formData = new FormData();

    formData.append('image', fileImage);

    try {
      toast.success('Profile is successfully updated');
    } catch {
      toast.error('Something went wrong. Try again!');
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
      {({ isSubmitting, dirty, touched, errors }) => (
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
          <Name>Name</Name>
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

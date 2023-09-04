import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ModalWindowStyled } from './RegisterSuccessModal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'var(--primary-background-color)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

 const RegisterSuccessModal =({isModalRegister, toggleModalRegister}) => {
  

  return (isModalRegister && <ModalWindowStyled>
      
      <Modal
        open={isModalRegister}
        onClose={toggleModalRegister}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Зайдіть на пошту і верефікуйтесь
          </Typography>
        </Box>
      </Modal>
    </ModalWindowStyled>
    
  );
}

export default RegisterSuccessModal;
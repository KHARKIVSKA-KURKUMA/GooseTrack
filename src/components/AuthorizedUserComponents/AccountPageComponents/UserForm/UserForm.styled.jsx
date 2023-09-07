import { Field, Form, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { ReactComponent as Icon } from 'img/add.svg';
import { ReactComponent as IconError } from 'img/ic_baseline-error-outline.svg';
import { ReactComponent as IconCorrect } from 'img/Done.svg';
import {
  space,
  layout,
  color,
  flexbox,
  position,
  border,
  shadow,
  grid,
} from 'styled-system';
import { DatePicker as DatePickerCalendar } from '@mui/x-date-pickers/DatePicker';

export const DatePickerStyled = styled(DatePickerCalendar)`
  box-sizing: border-box;
  width: 100%;
  font-weight: 600;
  font-family: 'Inter';
  font-size: 16px;
  line-height: 1.3;
  outline: none;
  border-radius: 8px;
  padding: 0px 14px;
  border-width: 1px;
  &:hover &:focus {
    border: 1px solid #111;
  }

  & .MuiInputBase-input {
    padding: 0px 14px;
    border-width: 1px;
    font-size: 14px;
    line-height: 1.29;
    height: 18px;
    font-weight: 600;
    color: ${props => props.color};
  }
  .MuiOutlinedInput-root {
    /* outline: none; */
    border: 1px solid ${props => props.borderColorInput};
    padding: 0px 14px;
    border-width: 1px;

    .MuiOutlinedInput-notchedOutline {
      border: 1px solid rgba(17, 17, 17, 0.15);
      padding: 0px 14px;
      border-width: 1px;
    }
  }

  .MuiInputBase-root {
    height: 42px;
    border-radius: 8px;
    border-radius: 8px;
    font-family: 'Inter';
    padding: 0px 14px;
    border-width: 1px;
  }

  &.MuiFormControl-root {
    background-color: inherit;
    height: 42px;
  }

  & div input::placeholder {
    font-size: 14px;
    color: ${props => props.color};
    opacity: 1;
    outline: none;
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  /* @media (min-width: 375px) {
    width: 299px;
  } */

  @media (min-width: 768px) {
    width: 354px;
    font-size: 16px;
    line-height: 1.12;

    && .MuiInputBase-root {
      height: 46px;
    }

    && .MuiInputBase-input {
      padding: 0px 0px 0px 18px;
      font-size: 16px;
      line-height: 1.12;
      height: 20px;
      font-weight: 600;
    }
  }
  & .MuiButtonBase-root {
    // margin-left: 18px;
    padding: 4px;
    stroke: #ffffff;
    margin: 0px 12px;
  }
`;

export const PopperDateStyles = {
  '& .MuiDateCalendar-root': {
    height: '354px',
    fontFamily: 'Inter sans-serif',
  },
  '& .MuiPaper-root': {
    backgroundColor: '#3E85F3',
    borderRadius: '16px',
    position: 'absolute',
    top: '5px',
    left: '-10px',
    fontSize: '34px',
  },
  '& .MuiPickersCalendarHeader-root': {
    position: 'relative',
    justifyContent: 'center',
  },
  '& .MuiPickersCalendarHeader-labelContainer': {
    margin: 0,
    color: '#FFFFFF',
    fontSize: '20px',
    lineHeight: 1.2,
  },
  '& .MuiButtonBase-root.MuiIconButton-root.MuiPickersCalendarHeader-switchViewButton':
    { display: 'none' },
  '& .MuiPickersDay-root': {
    color: '#FFFFFF',
    fontWeight: 300,
    fontSize: '14px',
    lineHeight: 1.33,
    padding: '20px',
  },
  '& .MuiPickersArrowSwitcher-spacer': {
    display: 'none',
  },
  '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
    {
      position: 'absolute',
      left: '35px',
      top: '9px',
      color: '#FFFFFF',
      width: '18px',
      height: '18px',
    },
  '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
    {
      position: 'absolute',
      top: '9px',
      right: '35px',
      color: '#FFFFFF',
      width: '18px',
      height: '18px',
    },
  '& .MuiDayCalendar-header': {
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  },
  '& .MuiTypography-root.MuiTypography-caption.MuiDayCalendar-weekDayLabel': {
    color: '#FFFFFF',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: 1.28,
  },

  '& .MuiPickersYear-yearButton': {
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: 1.28,
  },
  '& .MuiPickersYear-yearButton.Mui-selected': {
    backgroundColor: '#FFFFFF',
    color: '#3E85F3',
    borderRadius: '24px',
  },
  '& .MuiPickersYear-yearButton.Mui-wekend': {
    opacity: '35%',
  },
  '& .MuiPickersYear-yearButton.Mui-today.Mui-selected': {
    backgroundColor: '#FFFFFF',
    color: '#3E85F3',
    borderRadius: '24px',
    border: 'none',
  },
  '& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected': {
    backgroundColor: '#FFFFFF',
    color: '#3E85F3',
    borderRadius: '24px',
    width: '32px',
    height: '32px',
  },
  '& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected.MuiPickersDay-dayWithMargin.MuiPickersDay-today':
    {
      fill: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      color: '#3E85F3',
      borderRadius: '24px',
      width: '32px',
      height: '32px',
    },
  '@media (min-width: 768px)': {
    '& .MuiDateCalendar-root': {
      width: '337px',
      minHeight: '354px',
    },
    '& .MuiPaper-root': {
      padding: '15px 18px',
      scroll: 'none',
      position: 'absolute',
      top: '5px',
      left: '-10px',
    },
    '& .MuiPickersCalendarHeader-labelContainer': {
      fontSize: '24px',
      lineHeight: 1.17,
    },
    '& .MuiTypography-root.MuiTypography-caption.MuiDayCalendar-weekDayLabel': {
      fontSize: '18px',
      lineHeight: 1.33,
      padding: '22px',
    },
    '& .MuiPickersYear-yearButton': {
      fontSize: '18px',
      lineHeight: 1.33,
    },
    '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
      {
        left: '55px',
        top: '9px',
      },
    '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
      {
        top: '9px',
        right: '55px',
      },
    '& .MuiPickersDay-root': {
      color: '#FFFFFF',
      fontWeight: 300,
      fontSize: '18px',
      lineHeight: 1.33,
      padding: '22px',
    },
  },
  '@media (min-width: 1440px)': {
    '& .MuiDateCalendar-root': {
      width: '337px',
      minHeight: '334px',
    },
    '& .MuiPaper-root': {
      padding: '15px 18px',
      scroll: 'none',
      position: 'absolute',
      top: '-190px',
      left: '190px',
    },
    '& .MuiPickersCalendarHeader-labelContainer': {
      fontSize: '24px',
      lineHeight: 1.17,
    },
    '& .MuiTypography-root.MuiTypography-caption.MuiDayCalendar-weekDayLabel': {
      fontSize: '18px',
      lineHeight: 1.33,
    },
    '& .MuiDayCalendar-weekend': { opacity: '35%' },
    '& .MuiPickersYear-yearButton': {
      fontSize: '18px',
      lineHeight: 1.33,
    },
    '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeEnd.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
      {
        left: '55px',
        top: '9px',
      },
    '& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium.MuiPickersArrowSwitcher-button':
      {
        top: '9px',
        right: '55px',
      },
  },
};

export const Box = styled.div(
  space,
  layout,
  color,
  flexbox,
  position,
  border,
  shadow,
  grid
);

export const MessageError = styled(ErrorMessage)`
  display: block;
  color: red;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  max-width: 354px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: calc((14 / 12) * 100%);
  color: ${props => props.colorTitle};

  @media (min-width: 768px) {
    width: 354px;
    font-size: 14px;
    line-height: calc((18 / 14) * 100%);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  column-gap: 50px;
  align-items: center;
  max-width: 100%;
  margin-top: 40px;

  @media (min-width: 960px) {
    margin-bottom: 44px;
  }

  @media (min-width: 1150px) {
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 195px;
  height: 46px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  background: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  color: #ffffff;
  /* transition: ;*/
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #2b78ef;
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
  &:disabled {
    background-color: #cae8ff;
  }
  @media (min-width: 960px) {
    margin-top: 88px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  margin-top: 0;
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  line-height: calc((18 / 14) * 100%);
  /* transition: ; */
  color: ${props => props.colorTitleUser};

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: calc((18 / 18) * 100%);
  }
`;
export const Name = styled.h2`
  margin: 0;
  padding-top: 59px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  line-height: calc((18 / 14) * 100%);
  /* transition: ; */
  color: ${props => props.colorTitleUserName};

  @media (min-width: 768px) {
    padding-top: 20px;
    font-size: 18px;
    line-height: calc((18 / 18) * 100%);
  }
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const InputImg = styled.input`
  display: none;
`;

export const AddIcon = styled(Icon)`
  width: 100%;
  height: 100%;
  display: block;
  /* transition:; */
  fill: #3e85f3;
  &:hover,
  &:focus {
    fill: #3e9ff3;
  }
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 147px;
    left: 52%;
  }
  @media (min-width: 1440px) {
    top: 170px;
    left: 51%;
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

export const WrapImg = styled.div`
  position: absolute;
  left: calc(50% - 36px);
  top: -36px;
  width: 72px;
  height: 72px;
  margin: 0 auto;
  border: 2px solid #3e85f3;
  border-radius: 124px;
  overflow: hidden;

  @media (min-width: 768px) {
    position: static;
    width: 124px;
    height: 124px;
  }
`;

export const Sticker = styled.label`
  position: absolute;
  left: 10px;
  top: 25px;
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #e0e0e0;
  cursor: pointer;
  /* position: absolute;
  top: 85%;
  right: 20%; */

  @media (min-width: 768px) {
    top: 102px;
    left: 80px;

    width: 24px;
    height: 24px;
  }
`;

export const Input = styled(Field)`
  height: 42px;
  width: 100%;
  color: ${props => props.color};
  border-radius: 8px;
  border-width: 1px;
  padding: 0 14px;
  background-color: transparent;
  border: 1px solid ${props => props.border};
  font-family: 'Inter';
  font-weight: 600;
  font-size: 16px;
  line-height: calc((18 / 14) * 100%);
  &:hover {
    border: 1px solid #111;
  }

  &::placeholder {
    color: ${props => props.color};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: calc((18 / 16) * 100%);
  }
`;

export const AccountForm = styled(Form)`
  /* margin: 32px; */
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 40px;
  margin-top: 54px;
  padding-right: 18px;
  padding-left: 18px;
  padding-bottom: 40px;

  background-color: ${props => props.background};
  border-radius: 16px;
  height: 100%;

  @media (min-width: 768px) {
    padding-top: 40px;
    padding-left: 175px;
    padding-right: 175px;
    margin-left: 32px;
    margin-right: 32px;
  }
  @media (min-width: 1440px) {
    /* padding: 18px 18px; */
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 164px;
    padding-right: 164px;
    margin-right: 32px;
    margin-left: 332px;
  }
`;

export const IconStatusWrap = styled.div`
  position: relative;
  height: 46px;
  @media (min-width: 768px) {
    height: 46px;
  }
`;

export const CorrectTag = styled.div`
  color: #3cbc81;
  margin-top: 8px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

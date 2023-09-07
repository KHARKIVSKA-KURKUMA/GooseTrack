import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* ---------------------------------- fonts --------------------------------- */
 /* @font-face {
  font-family: 'Inter';
  src: url('./fonts/Inter-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  src: url('./fonts/Inter-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  src: url('./fonts/Inter-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  src: url('./fonts/Inter-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Poppins';
  src: url('./fonts/Poppins-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Poppins';
  src: url('./fonts/Poppins-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
} */

/* ---------------------------------- reset --------------------------------- */
  body {
  font-family: 'Inter', sans-serif;
  margin: 0;
}

a {
  text-decoration: none;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul {
  margin: 0;
  padding-left: 0;
  list-style-type: none;
}

address {
  font-style: normal;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

  
`;

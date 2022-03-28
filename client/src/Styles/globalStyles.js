import { createGlobalStyle } from 'styled-components';

export const globalVariables = {
  mobileScreenPadding: '0 7px',
  smallScreenPadding: '1rem 2rem',
  mediumScreenPadding: '0 10vw',
  largeScreenPadding: '0 15vw',
  smallScreenWidth: '768px',
  mediumScreenWidth: '1024px',
  largeScreenWidth: '1400px',
}

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: ebony;
  color: white;
  font-family: 'Raleway';
}
h1, h2, h3, h4, h5, h6 {
  // color: white;
}
`

export default GlobalStyles;
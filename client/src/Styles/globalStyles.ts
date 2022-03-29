import { createGlobalStyle } from 'styled-components';


export const globalVariables = {
  mobileScreenPadding: '0 7px',
  smallScreenPadding: '1rem 2rem',
  mediumScreenPadding: '0 10vw',
  largeScreenPadding: '0 15vw',
  smallScreenWidth: '768px',
  mediumScreenWidth: '1024px',
  largeScreenWidth: '1400px',
  orange: '#c2402a',
}

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  position: relative;
  margin: 0;
  padding: 0;
  font-family: 'Raleway';
  highlight: ${({theme}) => theme.highlight}
  transition: all 0.5s linear;
  // background-image: url("https://firebasestorage.googleapis.com/v0/b/cre-6cbea.appspot.com/o/iStock-1199440598.jpg?alt=media&token=b5e7557e-414f-4293-93c5-5f8ce88ba61e");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
h1, h2, h3, h4, h5, h6 {
  color: #c5c5c5;
}
`

export default GlobalStyles;


// #a7c2bf
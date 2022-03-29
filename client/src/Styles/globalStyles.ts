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
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: ${({theme})=> theme.background};
  color: ${({ theme }) => theme.fontColor};
  highlight: ${({theme}) => theme.highlight}
  font-family: 'Raleway';
  transition: all 0.5s linear;
}
h1, h2, h3, h4, h5, h6 {
  color: #a7c2bf;
}
`

export default GlobalStyles;


// #a7c2bf
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  color: white;
  font-family: 'Raleway';
}
h1, h2, h3, h4, h5, h6 {
  color: white;
}
`

export default GlobalStyles;
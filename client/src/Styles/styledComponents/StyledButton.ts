import styled from 'styled-components';
import { Button } from 'antd';

const StyledButton = styled(Button)`
  display:inline-block;
  padding:0.35em 1.2em;
  border:0.1em solid #FFFFFF;
  margin:0 0.3em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  background-color: transparent;
  color:#FFFFFF;
  text-align:center;
  transition: all 0.2s;
  margin: 0.6rem 1rem;
&:hover{
color:#000000;
background-color:#FFFFFF;
border:0.1em solid #FFFFFF;
transform: scale(1.05);
}
@media and (max-width:30em){
  display:block;
}
`

export default StyledButton;
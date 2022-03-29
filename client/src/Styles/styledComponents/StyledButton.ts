import styled from 'styled-components';
import { Button } from 'antd';

const StyledButton = styled(Button)`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 2.2rem;
  border: 2px solid #FFF;
  margin:0 0.3em 0.3em 0;
  border-radius: 8px;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Raleway', sans-serif;
  font-weight: 400;
  background-color: transparent;
  color:#c5c5c5;
  text-align:center;
  transition: all 0.2s;
  margin: 0.6rem 1rem;
  &.light {
    color: #000;
    border: 2px solid #000;
    &:hover{
      color:#c5c5c5;
      background-color:#000;
      border:0.1em solid #000;
      transform: scale(1.05);
      }
  }
&:hover{
color:#000000;
background-color:#c5c5c5;
border:0.1em solid #c5c5c5;
transform: scale(1.05);
}
@media and (max-width:30em){
  display:block;
}
`

export default StyledButton;
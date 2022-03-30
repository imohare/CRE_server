import styled from 'styled-components';
import LogoComponent from 'Components/ReuseableComponents/LogoComponent';

const StyledLogo = styled.div`
 color: silver;
 display: inline-block;
 text-shadow: 1px 1px grey;
 display: grid;
 height: 15vh;
 aspect-ratio: 1;
 grid-template-columns: repeat(2, 1fr);
 grid-template-rows: repeat(2, 1fr);
 .ball {
   display: flex;
   justify-content: center; 
   align-items: center;
   border-radius: 50%;
   background: radial-gradient(circle at 5vh 5vh,  #c5c5c5, black);
 }
 .ball-1 {
   grid-row: 1 / 2;
   grid-column: 1 / 2;
   background-color: blue;
 }

`

export default StyledLogo;
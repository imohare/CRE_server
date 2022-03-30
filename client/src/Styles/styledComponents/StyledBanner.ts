import styled from 'styled-components'
const StyledBannerComponent = styled.div<{ image: string, background: string }>`
right: 0;
left: -15vw;
width: 120vw;
height: 40vh;
position: relative;
padding: 2rem 0;

 .image {
   position: absolute;
   height: 35vh;
   aspect-ratio: 0.8;
   background-image: url(${props => props.image});
   border-radius: 50%;
   border: 6px ${({theme})=>theme.fontColor};
   background-size: cover;
   background-repeat: no-repeat;
   background-color: black;
   top: 1rem;
   left: 50%;
   transform: translate(-50%);
  
 }
 .background {
   position: relative;
   width: 100%;
   height: 100%;
   z-index: 4;
   background-image: url(${props => props.background});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
 }
`

export default StyledBannerComponent;
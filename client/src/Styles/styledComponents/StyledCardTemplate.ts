import styled from 'styled-components';


const StyledCardTemplate = styled.div <{background:string | undefined}>`border-radius: 2px
height: 20rem;
min-width: 14rem;
background-image: url(${props => props.background});
background-repeat: no-repeat;
background-size: cover;
margin: 0 0.6rem;
`


const StyledArtistCardTemplate = styled(StyledCardTemplate) <{ portrait: string | undefined }>`
position: relative;
height: 20rem;
min-width: 18rem;
background-image: url(${props => props.background || null });
background-repeat: no-repeat;
background-position: center;
background-size: cover;
margin: 0 0.6rem;

.portrait {
  background-image: url(${props => props.portrait || null});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  clip-path: polygon(0 0, 20% 0, 100% 90%,100% 100%, 50% 100%, 0 20%);
}
.title {
  position: absolute;
  font-family: 'Boogaloo';
  font-size: 4rem;
  padding: 2px 5px;
  top: 0;
  right: 0;
} 

`







export {
  StyledCardTemplate, 
  StyledArtistCardTemplate
}
import styled from 'styled-components';
import AnimatedCard from 'Styles/animations/CardAnimation';


const StyledArtistCardTemplate = styled.div<{ portrait: string | undefined }>`
position: relative;
min-width: 16rem;
height: 20rem;
margin: 0 0.6rem;
background-color: ${({ theme }) => theme.fontColor};
border-radius: 5px;
img {
  position: absolute;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  z-index: 0;
}
.portrait {
  background-image: url(${props => props.portrait || ''});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  clip-path: polygon(0 0, 100% 19%, 100% 100%, 59% 100%, 0 34%);
  z-index: 10;
}
&:hover {
  transform: scale(1.02);
  transition: transform 0.4s;
}
.title {
  position: absolute;
  font-family: 'Raleway', sans-serif;
  font-size: 4rem;
  padding: 2px 5px;
  bottom: 0;
  left: 0;
  z-index: 5;
} 
`

const StyledCardTemplate = styled.div<{ background: any | undefined }>`
display: flex;
flex-direction: column;
height: 18rem;
width: 14rem;
position: relative;
box-shadow: 1px 1px 5px black;
padding: 10px;
&:hover {
  transform: scale(1.05);
  transition: transform 0.4s;
}
.description {
  margin-top: 7px;
  color:#c5c5c5;
  h4{
    font-family: 'Raleway', sans-serif;
    font-size: 1.6rem;
    text-align: center;
    line-height: 1.2;
  }
  p {
    padding-left: 1rem;
  }
}
`

const StyledAlbumCardTemplate = styled(StyledCardTemplate)`
.coverImg {

  background-image: url(${props => props.background});
  background-color:green;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 60%;
  width: 100%;
}
`

const StyledEventCardTemplate = styled(StyledCardTemplate)`

.image {
  dixplay: flex;
  text-align: center;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 50%;
  width: 100%;
  justify-content: flex-end;
}
.date {
  color: #c5c5c5;
  font-family: 'Raleway', sans-serif;
  align-self: flex-end;
  font-weight: 600;
  text-transform: uppercase;
}
`

const StyledMerchCardTemplate = styled(StyledCardTemplate)`

.image {
  display: flex;
  text-align: center;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 50%;
  width: 100%;
  justify-content: flex-end;
}
`

export {
  StyledArtistCardTemplate,
  StyledAlbumCardTemplate,
  StyledEventCardTemplate,
  StyledMerchCardTemplate
}


//background portrait as before: 
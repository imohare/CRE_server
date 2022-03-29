import styled from 'styled-components';


const StyledArtistCardTemplate = styled.div<{ portrait: string | undefined }>`
position: relative;
min-width: 16rem;
height: 20rem;
margin: 0 0.6rem;
border-radius: 20px;
background-color: ${({theme})=> theme.fontColor};
img {
  position: absolute;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  z-index: 0;
}
.portrait {
  background-image: url(${props => props.portrait || '' });
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  z-index: 10;
  border-radius: 4px;
  // clip-path: polygon(0 0, 54% 0, 100% 100%, 46% 100%, 0 24%);
  clip-path: polygon(100% 0, 100% 66%, 60% 100%, 0 100%, 56% 0);
}
&:hover {
  transform: scale(1.02);
  transition: transform 0.4s;
}
.title {
  position: absolute;
  font-family: 'Boogaloo';
  font-size: 4rem;
  padding: 2px 5px;
  top: 0;
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
background-color: #a7c2bf;
box-shadow: 1px 1px 5px black;
padding: 5px;
&:hover {
  transform: scale(1.05);
  transition: transform 0.4s;
}
.description {
  margin-top: 7px;
  color: #B1D4E0;
  h4{
    font-family: 'Oswald';
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
  background-image: url(${props => props.background ||'https://images.onlinelabels.com/images/clip-art/Gerald_G/Gerald_G_45_RPM_Record.png'});
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
  background-image: url(${props => props.background ||'https://images.onlinelabels.com/images/clip-art/Gerald_G/Gerald_G_45_RPM_Record.png'});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 50%;
  width: 100%;
  justify-content: flex-end;
}
.date {
  color: #a7c2bf;
  font-family: 'Oswald';
  align-self: flex-end;
  font-weight: 600;
  text-transform: uppercase;
}
`

const StyledMerchCardTemplate = styled(StyledCardTemplate)`

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
`

export {
  StyledArtistCardTemplate,
  StyledAlbumCardTemplate,
  StyledEventCardTemplate, 
  StyledMerchCardTemplate
}


//background portrait as before: 
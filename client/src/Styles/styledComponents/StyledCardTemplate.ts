import styled from 'styled-components';


const StyledCardTemplate = styled.div <{ background: string | undefined }>`border-radius: 2px
position: relative;
height: 22rem;
background-image: url(${props => props.background});
background-repeat: no-repeat;
background-size: cover;
margin: 0 0.6rem;
`


const StyledArtistCardTemplate = styled(StyledCardTemplate)<{ portrait: string | undefined }>`
min-width: 18rem;
position: relative;
.portrait {
  background-image: url(${props => props.portrait || 'http://images4.fanpop.com/image/photos/23200000/The-Joker-the-joker-23255208-1400-1050.jpg' });
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
  text-shadow: 1px 1px black;
  z-index: 5;
} 
`
const StyledAlbumCardTemplate = styled(StyledCardTemplate)`
display: grid;
width: 300x;
height: 300px;
aspect-ratio: 1;
place-items: center;

background-image: url('https://p7.hiclipart.com/preview/387/453/292/phonograph-record-lp-record-45-rpm-album-clip-art-concerts.jpg'});

.title {
  font-family: Boogaloo;
  font-size: 1.6rem;
}
.description {

}
`


export {
  StyledCardTemplate, 
  StyledArtistCardTemplate,
  StyledAlbumCardTemplate
}
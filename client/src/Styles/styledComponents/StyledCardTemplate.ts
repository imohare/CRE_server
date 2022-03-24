import styled from 'styled-components';

const StyledArtistCardTemplate = styled.div<{ background: string | undefined, portrait: string | undefined }>`
position: relative;
min-width: 18rem;
height: 22rem;
background-image: url(${props => props.background});
background-repeat: no-repeat;
background-size: cover;
margin: 0 0.6rem;
border-radius: 2px;
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

const StyledGridTemplate = styled.div<{ background: string | undefined }>`
display: grid;
height: 18rem;
width: 15rem;
position: relative;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: repeat(8, 1fr);
background-color: white;
`
const StyledAlbumCardTemplate = styled(StyledGridTemplate)`

.coverImg {
  background-image: url(${props => props.background} || 'https://pngimg.com/uploads/vinyl/vinyl_PNG37.png')
  grid-rows: 1 / span 6;
  grid-column: 2 / 4;
  background-color: red;
}
.title {
  font-family: Boogaloo;
  font-size: 1.6rem;
}
`

const StyledEventCardTemplate = styled(StyledGridTemplate)`
display: grid;
min-width: 13rem;
height: 17rem;
background-image: url(${props => props.background})
`

const StyledMerchCardTemplate = styled(StyledGridTemplate)`
display: grid;
display: grid;
min-width: 13rem;
height: 30px;
background-color: white;
`

export {
  StyledArtistCardTemplate,
  StyledAlbumCardTemplate,
  StyledEventCardTemplate, 
  StyledMerchCardTemplate
}
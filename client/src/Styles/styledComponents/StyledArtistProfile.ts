import styled from 'styled-components';


const StyledArtistProfile = styled.div`
color: white;
.buttons {
   display: flex;
  justify-content: space-between;
}

.nftBoxes {
  margin: 2rem 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.box {
  position: relative;
  display: flex;
  color: white;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  min-height: calc(10rem + 7vw);
  min-width: calc(10rem + 7vw);
  border: solid 3px ${({ theme }) => theme.fontColor};
}
.absolute {
  position: absolute;
}
.invisible {
  display: none;
}

.Calbums {
}
.Cmerchandise {

}
.card {
  position: absolute;
}

`


export default StyledArtistProfile;
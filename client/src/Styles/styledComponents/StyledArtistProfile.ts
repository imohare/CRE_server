import styled from 'styled-components';


const StyledArtistProfile = styled.div`
.buttons {
  display: flex;
  justify-content: space-between;
}
.nftBoxes {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(10rem + 7vw);
  min-width: calc(10rem + 7vw);
  border: solid 3px ${({ theme }) => theme.fontColor};
}
.Cevents {
}
.Calbums {
}
.Cmerchandise {

}

`


export default StyledArtistProfile;
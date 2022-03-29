import styled from 'styled-components';


const StyledArtistProfile = styled.div`
.buttons {
  display: flex;
  justify-content: space-between;
}
.nftBoxes {
  display: flex;
  width: 100%;
}
.box {
  height: calc(18rem + 5vw);
  width: calc(18rem + 5vw);
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
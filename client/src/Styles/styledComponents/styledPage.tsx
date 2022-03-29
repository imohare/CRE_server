import styled from 'styled-components';

const StyledPage = styled.div`
position: absolute;
margin: 10px auto;
padding: 0 7px;
width: 96%;
.filters {
  list-style: none;
  display: flex;
}

@media screen and (min-width: 768px) {
  padding: 1rem 2rem;
}
@media screen and (min-width: 1024px) {
  width: 80%;
}
@media screen and (min-width: 1400px) {
  width: 70%;
}
`


export default StyledPage;

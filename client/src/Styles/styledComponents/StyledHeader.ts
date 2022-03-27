import styled from 'styled-components';
import { globalVariables } from '../globalStyles';

//the grid does not work properly because it assumes that the conditional content is rendered
//as well. the 24 fr actually have the same value as a 12 fr grid. 
const StyledHeader = styled.div`
width: 100%;
height: 50vh;
display: flex;
justify-content: space-between;
padding: ${globalVariables.mobileScreenPadding};

.buttons {
  display: flex;
  justify-content: space between;
}
.login {
  overflow-x: hidden;
}
@media screen and (min-width: ${globalVariables.smallScreenWidth}){
  padding: ${globalVariables.smallScreenPadding};

}
@media screen and (min-width: ${globalVariables.mediumScreenWidth}){
  padding: ${globalVariables.mediumScreenPadding};

}

@media screen and (min-width: ${globalVariables.largeScreenWidth}){
  padding: ${globalVariables.largeScreenPadding};

}
`

export default StyledHeader;
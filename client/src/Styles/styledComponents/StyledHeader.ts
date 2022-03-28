import styled from 'styled-components';
import { globalVariables } from '../globalStyles';

//the grid does not work properly because it assumes that the conditional content is rendered
//as well. the 24 fr actually have the same value as a 12 fr grid.

interface IProps {
  discoballs: string;
}

const StyledHeader = styled.div<IProps>`
width: 100%;
height: 50vh;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: ${globalVariables.mobileScreenPadding};

.navBar {
  display: flex;
  justify-content: flex-end;
}
.colorScheme {
  height: 180px;
  width: 12px;
  border-radius: 5px;
  background-color: #b9603c;
}
.buttons {
  display: flex;
  justify-content: flex-end;
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
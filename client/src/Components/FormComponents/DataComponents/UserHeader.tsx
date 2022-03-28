import { useContext } from 'react';

//data
// import {UserContext} from 'Data/UserContext'
import StyledHeader from 'Styles/styledComponents/StyledHeader'

//styling
import AnimatedH1 from "Styles/animations/AnimatedH1";

interface IProps {
  currentName: string;
}


const UserHeader = (props: IProps) => {
  // const { currentId, name } = useContext(UserContext);

  const { currentName } = props;
  console.log('lalallalala', currentName)
  return (
    <StyledHeader>
      
      <AnimatedH1>{ currentName }</AnimatedH1>
      { currentName }
      {/* <AnimatedH1>{ currentName } </AnimatedH1> */}
    </StyledHeader>
  )
}

export default UserHeader
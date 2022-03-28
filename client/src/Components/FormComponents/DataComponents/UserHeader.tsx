import { useContext } from 'react';

//data
// import {UserContext} from 'Data/UserContext'
import StyledHeader from 'Styles/styledComponents/StyledHeader'

//styling
import AnimatedH1 from "Styles/animations/AnimatedH1";
import { AnyStyledComponent } from 'styled-components';

interface IProps {
  currentName: string;
  discoballs: string;
}


const UserHeader = (props: IProps) => {
  // const { currentId, name } = useContext(UserContext);

  const { currentName, discoballs } = props;
  console.log('lalallalala', currentName)
  return (
    <StyledHeader discoballs={ discoballs }>
      <div className="colorScheme"></div>
      <AnimatedH1>{ currentName }</AnimatedH1>
      { currentName }
      {/* <AnimatedH1>{ currentName } </AnimatedH1> */}
    </StyledHeader>
  )
}

export default UserHeader
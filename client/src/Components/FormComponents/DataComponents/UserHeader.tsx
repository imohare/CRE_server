import { useContext } from 'react';

//data
// import {UserContext} from 'Data/UserContext'

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
    <div>
      <AnimatedH1>{ currentName }</AnimatedH1>
      { currentName }
      {/* <AnimatedH1>{ currentName } </AnimatedH1> */}
    </div>
  )
}

export default UserHeader
import { useContext } from 'react';
import { Link } from 'react-router-dom';

//data
import {UserContext} from 'Data/UserContext'
import StyledHeader from 'Styles/styledComponents/StyledHeader'

//styling
import AnimatedH1 from "Styles/animations/AnimatedH1";

interface IProps {
  currentName: string;
}



const UserHeader = (props: IProps) => {
  const { name, currentId } = useContext(UserContext);

  const { currentName } = props;
  return (
    <StyledHeader>
      
       <Link to={`user/${currentId}`}>
        <div className="userProfile">

                { name }

         </div>
       </Link>
      <AnimatedH1>{ currentName }</AnimatedH1>
      { currentName }
      {/* <AnimatedH1>{ currentName } </AnimatedH1> */}
    </StyledHeader>
  )
}

export default UserHeader
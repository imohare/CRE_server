import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//data
import {UserContext} from 'Data/UserContext'
import StyledHeader from 'Styles/styledComponents/StyledHeader'

//styling
import AnimatedH1 from "Styles/animations/AnimatedH1";
import StyledButton from 'Styles/styledComponents/StyledButton';

interface IProps {currentName: string;}

const UserHeader = (props: IProps) => {

  const { name, currentId } = useContext(UserContext);
  const { currentName } = props;

  let navigate = useNavigate(); 
  const profileRouteChange = () =>{ 
    let path = `user/${currentId}`; 
    navigate(path);
  }

  return (
    <StyledHeader>
       <StyledButton type="primary"  onClick={profileRouteChange}> User Profile</StyledButton>
      <AnimatedH1>{ currentName }</AnimatedH1>
    </StyledHeader>
  )
}

export default UserHeader
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'Components/searchbar';
//data
import { UserContext } from 'Data/UserContext'
import StyledHeader from 'Styles/styledComponents/StyledHeader'

//styling
import AnimatedH1 from "Styles/animations/AnimatedH1";
import StyledButton from 'Styles/styledComponents/StyledButton';
import { AnyStyledComponent } from 'styled-components';

interface IProps {
  currentName: string;
  searchArtists: any;
  searchVal: any;
}

const UserHeader = (props: IProps) => {

  const { name, currentId, userType } = useContext(UserContext);
  const { currentName, searchArtists, searchVal } = props;
  
  let navigate = useNavigate();
  const profileRouteChange = () => {

    let path = userType==='user' ? `user/${currentId}` : `artist/${currentId}`
    navigate(path);
  }

  return (
    <StyledHeader>
      <AnimatedH1>{currentName}</AnimatedH1>
      <div style={{
        display: 'flex',
        width: '100%', 
        justifyContent: 'space-between'
      }}>

        <StyledButton type="primary" onClick={profileRouteChange}> User Profile</StyledButton>
                <Form className="ArtistSearch" searchArtists={searchArtists} value={searchVal}  />
        </div>
    </StyledHeader>
  )
}

export default UserHeader
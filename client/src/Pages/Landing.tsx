//react
import { useState } from 'react';
import { Link } from 'react-router-dom';
//antd imports
import { Button } from 'antd';
//components
import LoginModal from '../Components/FormComponents/DataComponents/LoginModal';
import StyledPage from '../Styles/styledComponents/styledPage';
//styling

//form context
import { FormContextProvider } from '../Data/FormConfigs/FormContext';

const LandingPage: React.FunctionComponent = () => {

  //public view
  //login popup is set to visible on clicking the login button and to invisible on clicking cancel on Modal component:
  const [isVisible, setIsVisible] = useState(false);
  //sets the modal to display artist or user-login
  const [isArtist, setIsArtist] = useState(true);

  const toggleLogin = () => {
     setIsVisible(prevVisibility => !prevVisibility)
  }

  return (
    //if user, display personalised component on top -> artist || user - else, have a login sign up option
    <StyledPage>
      <h1>Landing page</h1>
      <p>public view without personalisation but with login/signup option</p>
      <FormContextProvider>
      {
        isVisible
        ?  <LoginModal onCancel={toggleLogin} isVisible={isVisible} isArtist={isArtist} setIsArtist={setIsArtist} />
        : null
        }
        </FormContextProvider>
      <Button type="primary" onClick={ toggleLogin }>login</Button>
      <p>for user and artist with personalised components at the top</p>
      <p>user view with recommendations</p>
      <Link to="/event">each link to an event </Link>/<Link to="/artist"> artist</Link>
      <p>artist view with upcoming</p>
      <Link to="/artist">each a link to an upcoming event</Link>

    </StyledPage>
  )
}

export default LandingPage;
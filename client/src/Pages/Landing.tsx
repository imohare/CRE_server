//react
import { Component, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
//antd imports
import { Button } from 'antd';
//components
import LoginModal from '../Components/FormComponents/DataComponents/LoginModal';
import StyledPage from '../Styles/styledComponents/styledPage';
import ScrollList from '../Components/ReuseableComponents/ScrollList';
import CardTemplate from '../Components/ReuseableComponents/CardTemplate';

//styling

//contexts
import { FormContextProvider } from '../Data/FormConfigs/FormContext';
//context is being used in this component
import { UserContext } from 'Data/UserContext';


const LandingPage: React.FunctionComponent = () => {

  //public view
  //login popup is set to visible on clicking the login button and to invisible on clicking cancel on Modal component:
  const [isVisible, setIsVisible] = useState(false);


  const { userType, setUserType } = useContext(UserContext);

  const toggleLogin = () => {
     setIsVisible(prevVisibility => !prevVisibility)
  }

  return (
    //if user, display personalised component on top -> artist || user - else, have a login sign up option
    <StyledPage>
      <h1>Landing page</h1>
      {/* Header */}
      <p>public view without personalisation but with login/signup option</p>
      <FormContextProvider>
      {
        isVisible
        ?  <LoginModal onCancel={toggleLogin} isVisible={isVisible}  />
        : null
        }
      </FormContextProvider>
      { userType === 'artist' ? <h1>hello artist</h1> : null}
      <Button type="primary" onClick={ toggleLogin }>sign up</Button>
      <p>for user and artist with personalised components at the top</p>
      <p>user view with recommendations</p>
      <Link to="/event">each link to an event </Link>/<Link to="/artist"> artist</Link>
      <p>artist view with upcoming</p>
      <Link to="/artist">each a link to an upcoming event</Link>
      <ScrollList>
        {/* map through children in here: */}
        <CardTemplate></CardTemplate>
        <CardTemplate></CardTemplate>
        <CardTemplate></CardTemplate>
        <CardTemplate></CardTemplate>
        <CardTemplate></CardTemplate>
        <CardTemplate></CardTemplate>
        <CardTemplate></CardTemplate>
        <CardTemplate></CardTemplate>
        <CardTemplate></CardTemplate>
        <CardTemplate></CardTemplate>
        <CardTemplate></CardTemplate>
        <CardTemplate></CardTemplate>
      </ScrollList>
    </StyledPage>
  )
}

export default LandingPage;
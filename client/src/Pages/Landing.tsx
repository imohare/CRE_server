//react
import { useState, useContext } from 'react';
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
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const { userType, setUserType } = useContext(UserContext);

  const toggleLogin = () => {
        setIsLogin(prev => !prev)
  }
  const toggleRegister = () => {
    setIsRegister(prev => !prev)
  }

  return (
    //if user, display personalised component on top -> artist || user - else, have a login sign up option
    <StyledPage>
       <FormContextProvider>
      <h1>Landing page</h1>
      {/* Header */}
      <div>
     
      {
          isRegister
        ? <LoginModal isVisible={isRegister} initialStage={3} onCancel={()=>toggleRegister()} />
        : null
        }
      <Button type="primary" onClick={ toggleLogin}>sign up</Button>
        </div>
        <div>
        {
          isLogin
        ? <LoginModal isVisible={isLogin} initialStage={0} onCancel={()=>toggleLogin()} />
        : null
        }
      <Button type="primary" onClick={ toggleRegister}>log in</Button>
        </div>
        </FormContextProvider>

      
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
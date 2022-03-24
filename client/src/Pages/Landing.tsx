//react
import { useState, useContext } from 'react';
//antd imports
import { Button, Card } from 'antd';
//components
import LoginModal from '../Components/FormComponents/DataComponents/LoginModal';
import StyledPage from '../Styles/styledComponents/styledPage';
import ScrollList from '../Components/ReuseableComponents/ScrollList';
import ArtistCardTemplate from '../Components/ReuseableComponents/CardTemplates/ArtistCardTemplate';
import AlbumCardTemplate from 'Components/ReuseableComponents/CardTemplates/AlbumCardTemplate';
//styling

//contexts
import { FormContextProvider } from '../Data/FormConfigs/FormContext';
//context is being used in this component
import { UserContext } from 'Data/UserContext';



///////testing/////////
import { exampleArtist, exampleAlbum } from '../testing/exampleObjects';





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

        <ArtistCardTemplate background='https://wallpapercave.com/wp/wp7172141.jpg' artist={exampleArtist}></ArtistCardTemplate>
        <AlbumCardTemplate album={ exampleAlbum }></AlbumCardTemplate>
      </ScrollList>
    </StyledPage>
  )
}

export default LandingPage;

//look for a random background generator api!   https://wallpapercave.com/wp/wp7172141.jpg'
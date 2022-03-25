//react
import { useState, useContext } from 'react';
//antd imports
import { Button, Card } from 'antd';
import StyledButton from '../Styles/styledComponents/StyledButton';
//components
import LoginModal from '../Components/FormComponents/DataComponents/LoginModal';
import StyledPage from '../Styles/styledComponents/styledPage';
import ScrollList from '../Components/ReuseableComponents/ScrollList';
import { EventCardTemplate, AlbumCardTemplate, ArtistCardTemplate, MerchCardTemplate } from '../Components/ReuseableComponents/CardTemplates';

import { FormContextProvider } from '../Data/FormConfigs/FormContext'
//styling
// import StyledHeader from '../Styles/styledComponents/StyledHeader';
import Parallax from '../Styles/animations/ParallaxAnimation';


//stylingß
import StyledHeader from '../Styles/styledComponents/StyledHeader'
//contexts
import { UserContext } from 'Data/UserContext';


///////testing/////////

import { exampleArtist, exampleAlbum, exampleEvent, exampleMerchandise } from '../testing/exampleObjects';



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
    <Parallax>
      <StyledHeader>
        <FormContextProvider>
          <h1>Landing page</h1>
          <div className='login'>
            <div className='buttons'>
              {
                isRegister
                  ? <LoginModal isVisible={isRegister} initialStage={3} onCancel={() => toggleRegister()} />
                  : null
              }
              <StyledButton type="primary" onClick={toggleLogin}>sign up</StyledButton>
              {
                isLogin
                  ? <LoginModal isVisible={isLogin} initialStage={0} onCancel={() => toggleLogin()} />
                  : null
              }
              <StyledButton type="primary" onClick={toggleRegister}>log in</StyledButton>
            </div>
          </div>
        </FormContextProvider>

      </StyledHeader>

      <StyledPage>


        <ScrollList title='Artists'>
          <ArtistCardTemplate background='https://wallpapercave.com/wp/wp7172141.jpg' artist={exampleArtist}></ArtistCardTemplate>
        </ScrollList>
        <ScrollList>
          <AlbumCardTemplate album={exampleAlbum} background='https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F7f2b5d24f103535739f89b984b5ec818.1000x1000x1.png'></AlbumCardTemplate>
        </ScrollList>
        <EventCardTemplate background='https://wallpapercave.com/wp/wp7172141.jpg' event={exampleEvent}></EventCardTemplate>
        <ScrollList title='Merchandise'>
          <MerchCardTemplate background='https://wallpapercave.com/wp/wp7172141.jpg' merchandise={exampleMerchandise}></MerchCardTemplate>
        </ScrollList>
      </StyledPage>
    </Parallax>

  )
}

export default LandingPage;

//look for a random background generator api!   https://wallpapercave.com/wp/wp7172141.jpg'
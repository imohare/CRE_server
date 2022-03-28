//react
import { useState, useContext, useEffect } from 'react';
//antd imports
import PublicHeader from 'Components/FormComponents/DataComponents/PublicHeader';
//components
import StyledPage from 'Styles/styledComponents/styledPage';
import ScrollList from 'Components/ReuseableComponents/ScrollList';
import { EventCardTemplate, AlbumCardTemplate, ArtistCardTemplate, MerchCardTemplate } from '../Components/ReuseableComponents/CardTemplates';
import UserHeader from 'Components/FormComponents/DataComponents/UserHeader';
import AlbumList from 'Components/Lists/albumList';

//styling

import Parallax from 'Styles/animations/ParallaxAnimation';
//styling

import * as background1 from 'images/background1.jpg';

//contexts
import { UserContext } from 'Data/UserContext';
//data 
import { getAllAlbums } from "Services/Album";

///////testing/////////
import { exampleArtist, exampleAlbum, exampleEvent, exampleMerchandise } from '../testing/exampleObjects';
import { IAlbum, IEvent, IMerchandise } from 'Data/DataTypes';
import { getEvents } from 'Services/Event';
import { getAllMerchandises } from 'Services/Merchandise';

import { Link, NavLink } from 'react-router-dom';
import StyledHeader from 'Styles/styledComponents/StyledHeader';
import { FormContextProvider } from 'Data/FormConfigs/FormContext';
import LoginModal from 'Components/FormComponents/DataComponents/LoginModal';
import StyledButton from 'Styles/styledComponents/StyledButton';


const LandingPage: React.FunctionComponent = () => {
  //public view
  //login popup is set to visible on clicking the login button and to invisible on clicking cancel on Modal component:
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { userType, setUserType } = useContext(UserContext);
  // are we not meant to set the user type here to use it later?
  const toggleLogin = () => {
    setIsLogin(prev => !prev)
  }
  const toggleRegister = () => {
    setIsRegister(prev => !prev)
  }

  const [albums, setAlbums] = useState<IAlbum[] | []>([]);
  const [events, setEvents] = useState<IEvent[] | []>([]);
  // const [upcomingEvents, setUpcomingEvents] = useState<IEvent [] | []>([]);
  const [merchandise, setMerchandise] = useState<IMerchandise[] | []>([]);

  useEffect(() => {
    getAllAlbums()
      .then((response: IAlbum[]) => {
        if (response) {
          response.sort((firstItem, secondItem) => secondItem.createdAt.getTime() - firstItem.createdAt.getTime())
          setAlbums(response)
        }
        else setAlbums(response)
      })
      .catch(error => {
        console.log(error)
        console.log("Error occured.")
      })
    getEvents()
      .then((response: IEvent[]) => {
        if (response) {
          response.sort((firstItem, secondItem) => secondItem.createdAt.getTime() - firstItem.createdAt.getTime())
          setEvents(response)
        }
      })
      .catch(error => {
        console.log(error)
        console.log("Error occured.")
      })
    getAllMerchandises()
      .then((response: IMerchandise[]) => {
        if (response) {
          response.sort((firstItem, secondItem) => secondItem.createdAt.getTime() - firstItem.createdAt.getTime())
          setMerchandise(response)
        }
      })
      .catch(error => {
        console.log(error)
        console.log("Error occured.")
      })
  }, [])
  
  return (
    //if user, display personalised component on top -> artist || user - else, have a login sign up option
    <div>

      <Parallax>

        <StyledHeader>
          <FormContextProvider>
            <h1>Landing page</h1>
            <div className='login'>
              {/* <Link to={`/user/${consumerId}`}>Profile</Link> how do we make this work? */}
              <div className='buttons'>
                { isRegister ? <LoginModal isVisible={isRegister} initialStage={3} onCancel={() => toggleRegister()} /> : null }
                <StyledButton type="primary" onClick={toggleLogin}>sign up</StyledButton>
                { isLogin ? <LoginModal isVisible={isLogin} initialStage={0} onCancel={() => toggleLogin()} /> : null }
                <StyledButton type="primary" onClick={toggleRegister}>log in</StyledButton>
              </div>
            </div>
          </FormContextProvider>
        </StyledHeader>

        <StyledPage>
      {(userType === 'public')
        ? <PublicHeader />
        : <UserHeader />
      }
      <StyledPage/>
        <div>
        <h3>Show me the</h3>
        <p><span className="shuffle colorchange filter">newest</span><span className="shuffle colorchange filter">rarest</span><span className="shuffle colorchange filter">upcoming</span><span className="shuffle colorchange filter">most popular</span></p>
          <p><span className="colorchange select">Events</span><span className="colorchange select">Albums</span><span className="colorchange select">Merch</span></p>
          </div>
          <ScrollList title='Artists'>
            <ArtistCardTemplate background={``} artist={exampleArtist}></ArtistCardTemplate>
          </ScrollList>
          <ScrollList title='Newest Albums'>
            {albums.map(album => <div key = {album.id}>
              <AlbumCardTemplate album={album}/>
            </div>
            )}        
          </ScrollList>
          <ScrollList title='Newest Events'>
          {events.map(event => <div key = {event.id}>
              <EventCardTemplate event={event} background={''}/>
            </div>
            )}  
          </ScrollList>
          <ScrollList title='Newest Merchandise'>
          {merchandise.map(merchandise => <div key = {merchandise.id}>
              <MerchCardTemplate merchandise={merchandise} background={''}/>
            </div>
            )}
          </ScrollList>
        </StyledPage>
        </Parallax>
    </div>
  )
}

export default LandingPage;

//look for a random background generator api!   https://wallpapercave.com/wp/wp7172141.jpg'
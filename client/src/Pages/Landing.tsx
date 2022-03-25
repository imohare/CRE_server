//react
import { useState, useContext, useEffect } from 'react';
//antd imports
import { Button, Card } from 'antd';
import StyledButton from '../Styles/styledComponents/StyledButton';
//components
import LoginModal from '../Components/FormComponents/DataComponents/LoginModal';
import StyledPage from '../Styles/styledComponents/styledPage';
import ScrollList from '../Components/ReuseableComponents/ScrollList';
import { EventCardTemplate, AlbumCardTemplate, ArtistCardTemplate, MerchCardTemplate } from '../Components/ReuseableComponents/CardTemplates';

import { FormContextProvider } from '../Data/FormConfigs/FormContext'
import AlbumList from 'Components/Lists/albumList';

//styling

import Parallax from '../Styles/animations/ParallaxAnimation';
//stylingß
import StyledHeader from '../Styles/styledComponents/StyledHeader'
//contexts
import { UserContext } from 'Data/UserContext';
//data 
import { getAllAlbums } from "Services/Album";

///////testing/////////
import { exampleArtist, exampleAlbum, exampleEvent, exampleMerchandise } from '../testing/exampleObjects';
import { IAlbum, IEvent, IMerchandise } from 'Data/DataTypes';
import { getEvents } from 'Services/Event';
import { getAllMerchandises } from 'Services/Merchandise';

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
        setMerchandise(response)
      })
  }, [])

  // const today = new Date();
  // console.log("event date", events[0].date.getTime())
  // console.log("today date" , today)
  // let upcoming = events.filter(evt => evt.date >= today)
  // console.log(upcoming)


  return (
    //if user, display personalised component on top -> artist || user - else, have a login sign up option
    <div>
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
      <h3>New Albums: </h3>
      {albums.map(album => album.name)}
      <h3>New Merchandise: </h3>
      {merchandise.map(merchandise => merchandise.name)}
      <h3>New Events: </h3>
      {events.map(events => events.name)}
      <h3>Upcoming Events: </h3>
    </div>
  )
}

export default LandingPage;

//look for a random background generator api!   https://wallpapercave.com/wp/wp7172141.jpg'
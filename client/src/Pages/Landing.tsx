//react
import { useState, useContext, useEffect } from 'react';
//antd imports
import PublicHeader from 'Components/FormComponents/DataComponents/PublicHeader';
//components
import StyledPage from '../Styles/styledComponents/styledPage';
import ScrollList from '../Components/ReuseableComponents/ScrollList';
import { EventCardTemplate, AlbumCardTemplate, ArtistCardTemplate, MerchCardTemplate } from '../Components/ReuseableComponents/CardTemplates';
import UserHeader from '../Components/FormComponents/DataComponents/UserHeader';
import AlbumList from 'Components/Lists/albumList';

//styling

import Parallax from '../Styles/animations/ParallaxAnimation';
//stylingß
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


  const { userType, setUserType } = useContext(UserContext);

   const [albums, setAlbums] = useState<IAlbum[] | []>([]);
  const [events, setEvents] = useState<IEvent[] | []>([]);
  // const [upcomingEvents, setUpcomingEvents] = useState<IEvent [] | []>([]);
  const [merchandise, setMerchandise] = useState<IMerchandise[] | []>([]);

  // useEffect(() => {
  //   getAllAlbums()
  //     .then((response: IAlbum[]) => {
  //       if (response) {
  //         response.sort((firstItem, secondItem) => secondItem.createdAt.getTime() - firstItem.createdAt.getTime())
  //         setAlbums(response)
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error)
  //       console.log("Error occured.")
  //     })
    // getEvents()
    //   .then((response: IEvent[]) => {
    //     if (response) {
    //       response.sort((firstItem, secondItem) => secondItem.createdAt.getTime() - firstItem.createdAt.getTime())
    //       setEvents(response)
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     console.log("Error occured.")
    //   })
    // getAllMerchandises()
    //   .then((response: IMerchandise[]) => {
    //     if (response) {
    //       response.sort((firstItem, secondItem) => secondItem.createdAt.getTime() - firstItem.createdAt.getTime())
    //       setMerchandise(response)
    //     }
    //     setMerchandise(response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     console.log("Error occured.")
    //   })
  // }, [])

  // const today = new Date();
  // console.log("event date", events[0].date.getTime())
  // console.log("today date" , today)
  // let upcoming = events.filter(evt => evt.date >= today)
  // console.log(upcoming)


  return (
    //if user, display personalised component on top -> artist || user - else, have a login sign up option
    <div>
      {(userType === 'public')
        ? <PublicHeader />
        : <UserHeader />
      }
        <StyledPage>
          <ScrollList title='Artists'>
            <ArtistCardTemplate background='https://wallpapercave.com/wp/wp7172141.jpg' artist={exampleArtist}></ArtistCardTemplate>
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
    </div>
  )
}

export default LandingPage;

//look for a random background generator api!   https://wallpapercave.com/wp/wp7172141.jpg'
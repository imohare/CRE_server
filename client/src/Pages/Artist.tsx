//react
import { Link, useLocation } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
//antd imports
import { Button } from 'antd';
//services
import { getAllAlbums, getAllAlbumsbyArtistId } from 'Services/Album';
import { getEvents, getEventsByArtistId } from 'Services/Event';
import { getAllMerchandises, getAllMerchandisesbyArtistId } from 'Services/Merchandise';
//components
import StyledPage from '../Styles/styledComponents/styledPage';
//styling
// import './Artist.css'
//Datatypes
import { IAlbum, IEvent, IMerchandise } from '../Data/DataTypes';
//context is being used in this component
import { UserContext } from 'Data/UserContext';
import AlbumInputBar from 'Components/FormComponents/DataComponents/AlbumForm2';
import EventInputBar from 'Components/FormComponents/DataComponents/EventForm2';
import MerchandiseInputBar from 'Components/FormComponents/DataComponents/MerchandiseForm2';
import { Box, Flex } from 'rebass';
const ArtistPage: React.FunctionComponent = () => {
  const [type, setType] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [albums, setAlbums] = useState<IAlbum[] | []>([]);
  const [events, setEvents] = useState<IEvent[] | []>([]);
  // const [upcomingEvents, setUpcomingEvents] = useState<IEvent [] | []>([]);
  const [merchandise, setMerchandise] = useState<IMerchandise[] | []>([]);
  const location = useLocation();
  const { currentId } = useContext(UserContext);
  useEffect(() => {
    // const artistId: number = parseInt(location.pathname.replace(/[^0-9.]+/g, ''))
    // const artistAlbums = getAllAlbumsbyArtistId(artistId);
    // const artistMerch = getAllMerchandisesbyArtistId(artistId);
    // const artistEvebts = getEventsByArtistId(artistId);
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
  const handleAlbumState = () => setType('album');
  const handleEventState = () => setType('event');
  const handleMerchandiseState = () => setType('merchandise');
  return (
    <StyledPage>
      <div className="artistUserView">
        <Link to="/">home</Link>
        <Flex>
          <Box width={2/6}>
            <h1>Upload NFTs</h1>
            <br/> <br/> <br/>
            <h3>To upload new NFTs to your profile, please select
              from the following category and input required information: </h3>
              <br/> <br/> <br/> 
              <Box>
                <Button onClick={handleAlbumState} color="#33e">album</Button>
              </Box>
              <br/>
              <Box>
                <Button onClick={handleEventState}>event</Button>
              </Box>
              <br/>
              <Box>
                <Button onClick={handleMerchandiseState}>merchandise</Button>
              </Box>
          </Box>
          <br/>
          <Box width={1/6}/>
          <Box width={3/6}>
            {(type === 'album') ? <AlbumInputBar albums={albums} setAlbums={setAlbums} /> : null}
            {(type === 'event') ? <EventInputBar events={events} setEvents={setEvents} /> : null}
            {(type === 'merchandise') ? <MerchandiseInputBar merchandise={merchandise} setMerchandise={setMerchandise} /> : null}
          </Box>
        </Flex>
      </div>
    </StyledPage>
  )
}
export default ArtistPage;















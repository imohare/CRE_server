//react
import { Link, useParams } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
//antd imports
//services
import { getAllAlbums, getAllAlbumsbyArtistId } from 'Services/Album';
import { getEvents, getEventsByArtistId } from 'Services/Event';
import { getAllMerchandises, getAllMerchandisesbyArtistId } from 'Services/Merchandise';
import { getArtistById } from 'Services/Artist';
//components
import StyledPage from 'Styles/styledComponents/styledPage';
import StyledButton from 'Styles/styledComponents/StyledButton';
//styling
import StyledArtistProfile from 'Styles/styledComponents/StyledArtistProfile';
import StyledBannerComponent from 'Styles/styledComponents/StyledBanner';
// import './Artist.css'
//Datatypes
import { IAlbum, IArtist, IEvent, IMerchandise } from '../Data/DataTypes';
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
  const [artist, setArtist] = useState<IArtist | null>(null)

  // const [upcomingEvents, setUpcomingEvents] = useState<IEvent [] | []>([]);
  const [merchandise, setMerchandise] = useState<IMerchandise[] | []>([]);
  
  const { artistId } = useParams();

  const currentArtistId = artistId && parseInt(artistId);
  
  const closeDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setType('');
  }

  const { currentId } = useContext(UserContext);

  useEffect(() => {
 
    //@ts-ignore
    getAllAlbumsbyArtistId(currentArtistId)
      .then(res => {
        if (res) {
          setAlbums(res)
          return res;
        } else {
          console.log('no artist on that page')
        }
      }).then(
        data => console.log('albums should be here', data)
    )
    
    //@ts-ignore
    getAllMerchandisesbyArtistId(currentArtistId)
      .then(res => {
        if (res) {
          setMerchandise(res);
          return res;
        } else {
          console.log('no merchandise found')
        }
      })
      .catch(error => {
        console.log(error);
      })
    
    //@ts-ignore
    // getEventsbyArtistId(currentArtistId)
    //   .then(res => {
    //     setEvents(res)
    //     return res;
    //   })
     
    
    //@ts-ignore
    getArtistById(currentArtistId)
      .then(res => {
        if (res) {
        setArtist(res)
        } else {
          console.log('no artist matching that id found')
      }
      })
      .catch(error => {
        console.log(error);
    })
  }, [])


  const handleAlbumState = () => setType('album');
  const handleEventState = () => setType('event');
  const handleMerchandiseState = () => setType('merchandise');
  const handleCancel = () => setType('');


 return (
    <StyledPage>
    <StyledArtistProfile>
       <Link to="/">home</Link>
       <h1>{artist && artist.name}</h1>

       <StyledBannerComponent background={exampleObj.randomBackground} image={ artist.profile_picture }><div className="background"><div className="image"></div></div></StyledBannerComponent>
      <div className="nftBoxes">
         <motion.div className="Cevents box"
           whileHover={{ rotate: ['2deg', '-2deg', '1.5deg', '-1deg'] }}
           animate={{rotate: 0}}
           whileTap={{ scale: 0.8 }}
           transition={{ duration: 0.5 }}
           exit={{rotate: '0deg'}}
         >
            </motion.div>
          <div className="Calbums box"></div>
         <div className="Cmerchandise box"></div>
         </div>
       {
         <div className="profileview">
        <p>To upload new NFTs to your profile, please select
        from the following category and input required information: </p>
      <div className="buttons">
      <StyledButton  onClick={handleAlbumState} color="#33e">album</StyledButton>
      <StyledButton onClick={handleEventState}>event</StyledButton>
      <StyledButton  onClick={handleMerchandiseState}>merchandise</StyledButton>
      </div>
      {(type === 'album') ? <AlbumInputBar albums={albums} onClose={ closeDropdown } setAlbums={setAlbums} /> : null}
      {(type === 'event') ? <EventInputBar events={events} onClose={ closeDropdown } setEvents={setEvents} /> : null}
      {(type === 'merchandise') ? <MerchandiseInputBar merchandise={merchandise} onClose={closeDropdown} setMerchandise={setMerchandise} /> : null} 
      </div>
      } 
    </StyledArtistProfile>
  </StyledPage>
  )
}



export default ArtistPage;


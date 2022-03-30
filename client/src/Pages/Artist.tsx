//react
import { Link, useParams } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import LogoComponent from 'Components/ReuseableComponents/LogoComponent';
//antd imports
//services
import { getAllAlbums, getAllAlbumsbyArtistId } from 'Services/Album';
import { getEvents, getEventsByArtistId } from 'Services/Event';
import { getAllMerchandises, getAllMerchandisesbyArtistId } from 'Services/Merchandise';
import { getArtistById } from 'Services/Artist';
import { getEthAddress } from 'Tools/FormHelpers';
//components

import BannerComponent from 'Styles/styledComponents/Banner';
import StyledPage from 'Styles/styledComponents/styledPage';
import StyledButton from 'Styles/styledComponents/StyledButton';
//styling
import DraggableAlbumCard from 'Components/ReuseableComponents/DraggableCard';
import DraggableEventsCard from 'Components/ReuseableComponents/StyledDraggableEventsCard';
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

import DraggableMerchCard from 'Components/ReuseableComponents/DraggableMerchCard'

const ArtistPage: React.FunctionComponent = () => {


  //updating the display of the cards
  const [eventTitle, setEventTitle] = useState<string | null>('Events');
  const [albumTitle, setAlbumTitle] = useState<string | null>('Albums');
  const [merchTitle, setMerchTitle] = useState<string | null>('Merchandise');
  const [eventCvisible, setEventCsvisible] = useState<string>('invisible');
  const [albumCvisible, setAlbumCsvisible] = useState<string>('invisible');
  const [merchCvisible, setMerchCsvisible] = useState<string>('invisible');
  
  
  
  const [type, setType] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [albums, setAlbums] = useState<IAlbum[] | []>([]);
  const [events, setEvents] = useState<IEvent[] | []>([]);
  const [merchandise, setMerchandise] = useState<IMerchandise[] | []>([]);

  const [artist, setArtist] = useState<IArtist | null>(null);
  const [ethAddress, setEthAddress] = useState<string | null>(null);

  // const [upcomingEvents, setUpcomingEvents] = useState<IEvent [] | []>([]);
  
  const { artistId } = useParams();

  const currentArtistId = artistId && parseInt(artistId);



//   const reorder = (elements: any[]) => {
//     const temp = elements.pop();
//     elements.unshift(temp);
// }
  
  
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
    
    // @ts-ignore
    getEventsByArtistId(currentArtistId)
      .then(res => {
          console.log("hello")
        console.log(res, "res")
          setEvents(res)
          console.log("eventsinside", events)
        return res;
      }).catch((error: any) => {
        console.log(error)
      })
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
     getEthAddress()
     .then((res: string) => {
       setEthAddress(res)
     }).catch((error: any) => {
       console.log(error)
     })
    

    
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
  console.log('albums', albums, 'events', events, 'merchandise', merchandise)
 return (
   <StyledPage>
     <LogoComponent></LogoComponent>
     <StyledArtistProfile>
       {
         artist &&
         <BannerComponent background={'https://unsplash.com/photos/dPgPoiUIiXk?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'} image={artist.profile_picture} title={ artist.name } ></BannerComponent>
       }
 
       {/* <StyledBannerComponent background={exampleObj.randomBackground} image={ artist.profile_picture }><div className="background"><div className="image"></div></div></StyledBannerComponent> */}
      <div className="nftBoxes">
         <motion.div className="Cevents box"
           whileHover={{ rotate: ['2deg', '-2deg', '1.5deg', '-1deg'] }}
           animate={{rotate: 0}}
           whileTap={{ scale: 0.8 }}
           transition={{ duration: 0.5 }}
           exit={{rotate: '0deg'}}
         >
           <div onClick={() => {
             setEventTitle(null)
              setEventCsvisible('visible')
           }} className="eventTitleDiv">{eventTitle}</div>
       
           {
             events.length > 0 ? events.map(event => {
               
               return <DraggableEventsCard rotation={Math.floor(Math.random() * 3)} event={event}></DraggableEventsCard>
           })
               : <div className={`absolute ${eventCvisible}` } >
                 there are no events available
               
             </div> } 
            </motion.div>
            <motion.div className="Calbums box"
           whileHover={{ rotate: ['2deg', '-2deg', '1.5deg', '-1deg'] }}
           animate={{rotate: 0}}
           whileTap={{ scale: 0.8 }}
           transition={{ duration: 0.5 }}
           exit={{rotate: '0deg'}}
         >

           <div onClick={(e: any) => {
             e.preventDefault();
             setAlbumTitle(null)
              setAlbumCsvisible('visible')
           }} className="albumTitleDiv">{albumTitle}</div>


           {albums.length > 0 ? albums.map(album => {
             return <div className={`albumV ${albumCvisible}`}>
               <DraggableAlbumCard rotation={Math.floor(Math.random() * 3)} album={album}></DraggableAlbumCard> </div>
           })
             : <div className={`absolute ${albumCvisible}` } >
             there are currently no albums available
           
         </div> }
         </motion.div>
         <motion.div className="Cmerch box"
           whileHover={{ rotate: ['2deg', '-2deg', '1.5deg', '-1deg'] }}
           animate={{rotate: 0}}
           whileTap={{ scale: 0.8 }}
           transition={{ duration: 0.5 }}
           exit={{rotate: '0deg'}}
         >



           <div onClick={(e: any) => {
             e.preventDefault();
             setMerchTitle(null)
             setMerchCsvisible('visible')
           }} className="merchTitleDiv">{merchTitle}</div>

           {
             merchandise.length > 0 ? merchandise.map(merch => {
               return <div className={`merchV ${merchCvisible}`}>
                 <DraggableMerchCard classified="true" rotation={Math.floor(Math.random() * 12) - 6} merch={merch} ></DraggableMerchCard>
               </div>
             })  
             : <div className={`absolute ${merchCvisible}` } >
             there is no merchandise available
         </div>
           }
         </motion.div>
         </div>
       {

           artist && artist.eth_address === ethAddress ? ( <div className="profileview">
        <p>To upload new NFTs to your profile, please select
        from the following category and input required information: </p>
      <div className="buttons">
 
      <StyledButton onClick={handleEventState}>add event</StyledButton>
       <StyledButton onClick={handleAlbumState} color="#33e">add album</StyledButton>
      <StyledButton  onClick={handleMerchandiseState}>add merchandise</StyledButton>
           </div>
              {(type === 'album') ? <AlbumInputBar albums={albums} onClose={ closeDropdown } setAlbums={setAlbums} /> : null}
              {(type === 'event') ? <EventInputBar events={events} onClose={ closeDropdown } setEvents={setEvents} /> : null}
              {(type === 'merchandise') ? <MerchandiseInputBar merchandise={merchandise} onClose={closeDropdown} setMerchandise={setMerchandise} /> : null} 
               </div>)
           : null
      } 
    </StyledArtistProfile>
  </StyledPage>
  )
}



export default ArtistPage;


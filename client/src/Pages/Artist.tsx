//react
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
//antd imports
import { Button } from 'antd';
//services
import { getAllAlbums } from 'Services/Album';
import { getEvents } from 'Services/Event';
import { getAllMerchandises } from 'Services/Merchandise';
//components
import StyledPage from '../Styles/styledComponents/styledPage';
import ArtistProfileView from 'Components/FormComponents/DataComponents/ArtistProfileView'
//styling

//Datatypes
import { IAlbum, IEvent, IMerchandise, IArtist } from '../Data/DataTypes';

//context is being used in this component
import { UserContext } from 'Data/UserContext';
import AlbumInputBar from 'Components/FormComponents/DataComponents/AlbumForm2';
import EventInputBar from 'Components/FormComponents/DataComponents/EventForm2';
import MerchandiseInputBar from 'Components/FormComponents/DataComponents/MerchandiseForm2';
import { getArtistById } from 'Services/Artist';

import { useParams } from 'react-router-dom';
import { isNullishCoalesce } from 'typescript';


const ArtistPage: React.FunctionComponent = () => {
const [ type, setType] = useState('');
const [ submitted, setSubmitted ] = useState(false);

const [albums, setAlbums] = useState<IAlbum[] | []>([]);
const [events, setEvents] = useState<IEvent[] | []>([]);
// const [upcomingEvents, setUpcomingEvents] = useState<IEvent [] | []>([]);
const [merchandise, setMerchandise] = useState<IMerchandise[] | []>([]);
//getting user info
  const { userType, currentId, name } = useContext(UserContext);
  const { artistId } = useParams();
  const thisArtistId = artistId && parseInt(artistId);

  const [thisArtist, setThisArtist] = useState<IArtist>(null!);

  useEffect(() => {
    thisArtistId && getArtistById(thisArtistId)
      .then((response: IArtist) => {
        if (response) {
          setThisArtist(response)
        } 
      }
    )
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
      {
        thisArtistId === currentId ? <ArtistProfileView></ArtistProfileView> : null
      }
        <Link to="/"></Link>
      <h1>{  thisArtist.name  }</h1>
     
    <p>user view without any authorisations but with fake follow button</p>
    </StyledPage>
  )
}

export default ArtistPage;
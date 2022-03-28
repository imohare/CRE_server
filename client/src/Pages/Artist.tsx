//react
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
//antd imports
import { Button, Card } from 'antd';
//firebase imports
// import { storage } from '../Firebase/index'
//services
import { createAlbum, getAllAlbums } from 'Services/Album';
//components
import AlbumForm from '../Components/FormComponents/DataComponents/AlbumForm'
import EventForm from '../Components/FormComponents/DataComponents/EventForm';
import MerchandiseForm from '../Components/FormComponents/DataComponents/MerchandiseForm'
import StyledPage from '../Styles/styledComponents/styledPage';
//styling

//Datatypes
import { IAlbum, IEvent, IMerchandise } from '../Data/DataTypes';

//context is being used in this component
import { UserContext } from 'Data/UserContext';
import AlbumInputBar from 'Components/FormComponents/DataComponents/AlbumForm2';
import { getEvents } from 'Services/Event';
import { getAllMerchandises } from 'Services/Merchandise';


const ArtistPage: React.FunctionComponent = () => {
const [ type, setType] = useState('');
const [ submitted, setSubmitted ] = useState(false);

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

const handleAlbumState = () => setType('album');
const handleEventState = () => setType('event');
const handleMerchandiseState = () => setType('merchandise');
  
  return (
    <StyledPage>
        <Link to="/">home</Link>
        <h1>Artist</h1>
      <p>To upload new NFTs to your profile, please select 
        from the following category and input required information: </p>
      <button onClick={handleAlbumState}>album</button>
      <button onClick={handleEventState}>event</button>
      <button onClick={handleMerchandiseState}>merchandise</button>
      {(type === 'album') ? <AlbumInputBar albums={albums} setAlbums={setAlbums}/> : null}
      { (type === 'event') ? <p> Event Form</p> : null}
      {(type === 'merchandise') ? <p> Merchandise Form</p> : null}
    <p>artist view with option to update offers</p>
    <p>user view without any authorisations but with fake follow button</p>
    </StyledPage>
  )
}

export default ArtistPage;
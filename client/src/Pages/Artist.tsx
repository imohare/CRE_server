//react
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
//antd imports
import { Button, Card } from 'antd';
//firebase imports
import { storage } from '../Firebase/index'
//services
import { createAlbum } from 'Services/Album';
//components
import AlbumForm from '../Components/FormComponents/DataComponents/AlbumForm'
import EventForm from '../Components/FormComponents/DataComponents/EventForm';
import MerchandiseForm from '../Components/FormComponents/DataComponents/MerchandiseForm'
import StyledPage from '../Styles/styledComponents/styledPage';
//styling

//contexts
import { AlbumFormContextProvider } from '../Data/FormConfigs/FormAlbumContext';
//context is being used in this component
import { UserContext } from 'Data/UserContext';


const ArtistPage: React.FunctionComponent = () => {
const [ type, setType] = useState('');
const [ submitted, setSubmitted ] = useState(false);
const { userType, setUserType } = useContext(UserContext);

const toggleSubmit = () => {
  setSubmitted(prev => !prev)
}

const handleAlbumState = () => setType('album');
const handleEventState = () => setType('event');
const handleMerchandiseState = () => setType('merchandise');

  return (
    <StyledPage>
      <AlbumFormContextProvider>
        <Link to="/">home</Link>
        <h1>Artist</h1>
      <p>To upload new NFTs to your profile, please select 
        from the following category and input required information: </p>
      <button onClick={handleAlbumState}>album</button>
      <button onClick={handleEventState}>event</button>
      <button onClick={handleMerchandiseState}>merchandise</button>
      { (type === 'album') ? <AlbumForm/> : null}
      { (type === 'event') ? <EventForm /> : null}
      { (type === 'merchandise') ? <MerchandiseForm /> : null}
    <p>artist view with option to update offers</p>
    <p>user view without any authorisations but with fake follow button</p>
    <Link to="/event">specific event</Link>
      </AlbumFormContextProvider>
    </StyledPage>
  )
}

export default ArtistPage;
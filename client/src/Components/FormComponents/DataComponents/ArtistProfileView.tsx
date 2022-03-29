
import { useState } from 'react';

//importing components
import AlbumInputBar from 'Components/FormComponents/DataComponents/AlbumForm2';
import EventInputBar from 'Components/FormComponents/DataComponents/EventForm2';
import MerchandiseInputBar from 'Components/FormComponents/DataComponents/MerchandiseForm2';

// datatypes
import { IAlbum, IEvent, IMerchandise } from 'Data/DataTypes';

//buttons
import { Button } from 'antd';


const ArtistProfileView = () => {
  
  const [ type, setType] = useState('');
  const [ submitted, setSubmitted ] = useState(false);
  
  const [albums, setAlbums] = useState<IAlbum[] | []>([]);
  const [events, setEvents] = useState<IEvent[] | []>([]);
  // const [upcomingEvents, setUpcomingEvents] = useState<IEvent [] | []>([]);
  const [merchandise, setMerchandise] = useState<IMerchandise[] | []>([]);

  const handleAlbumState = () => setType('album');
  const handleEventState = () => setType('event');
  const handleMerchandiseState = () => setType('merchandise');


  return (
    <div>
    <h1></h1>
    <h5>To upload new NFTs to your profile, please select 
      from the following category and input required information: </h5>
    <Button onClick={handleAlbumState} color="#33e">album</Button>
    <Button onClick={handleEventState}>event</Button>
    <Button onClick={handleMerchandiseState}>merchandise</Button>
    {(type === 'album') ? <AlbumInputBar albums={albums} setAlbums={setAlbums}/> : null}
    {(type === 'event') ? <EventInputBar events={events} setEvents={setEvents}/> : null}
    {(type === 'merchandise') ? <MerchandiseInputBar merchandise={merchandise} setMerchandise={setMerchandise}/> : null}
    </div>
  )
}

export default ArtistProfileView
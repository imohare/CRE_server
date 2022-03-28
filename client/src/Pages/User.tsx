//react
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserContext } from 'Data/UserContext';
import { getConsumerById } from '../Services/Consumer'
import { useContext } from 'react';
import { getConsumerAlbumTokensByConsumerId } from 'Services/AlbumToken';
import { getConsumerEventTokensByConsumerId } from 'Services/EvenToken';
import { getConsumerMerchTokensByConsumerId } from 'Services/MerchToken';
import ScrollList from 'Components/ReuseableComponents/ScrollList';
import { AlbumCardTemplate, EventCardTemplate, MerchCardTemplate } from 'Components/ReuseableComponents/CardTemplates';
import { IAlbum, IConsumer, IEvent, IMerchandise } from 'Data/DataTypes';

const UserPage: React.FunctionComponent = () => {
  const location = useLocation();
  const { currentId } = useContext(UserContext);

  const [albums, setAlbums] = useState<IAlbum[] | []>([]);
  const [events, setEvents]  = useState<IEvent[] | []>([]);
  const [merchandises, setMerchandises] = useState<IMerchandise[] | []>([]);
  const [user, setUser] = useState<IConsumer>({
    eth_address: '',
    username: '',
    profile_picture: '',
    location: '',
    email: '',
  });

  useEffect(() => {
    getConsumerAlbumTokensByConsumerId(currentId)
        .then(response => {
          setAlbums(response);
            return response;
        })
    getConsumerEventTokensByConsumerId(currentId)
      .then(response => {
          setEvents(response);
            return response;
        })
    getConsumerMerchTokensByConsumerId(currentId)
      .then(response => {
          setMerchandises(response);
            return response;
        })
    getConsumerById(currentId)
      .then(response => {
        setUser(response);
        return response
      })
     }, [])

  return (
    <>
      <Link to="/">home</Link>
      <h1>@{user.username} Profile</h1>
      <h2></h2>
    
      <ScrollList title='Your NFT Albums'>
            { (albums.length > 0) ? albums.map(album => <div key = {album.id}>
              <AlbumCardTemplate album={album}/>
            </div>)
            : null}        
      </ScrollList>
      <ScrollList title='Your NFT Events'>
          { (events.length > 0) ? events.map(event => <div key = {event.id}>
              <EventCardTemplate event={event} background={''}/>
            </div>)
            : null }  
          </ScrollList>
          <ScrollList title='Your NFT Merchandise'>
          { (merchandises.length > 0) ? merchandises.map(merchandise => <div key = {merchandise.id}>
              <MerchCardTemplate merchandise={merchandise} background={''}/>
            </div>)
            : null}
          </ScrollList>
    </>)
}

export default UserPage;

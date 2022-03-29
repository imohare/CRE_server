//react
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserContext } from 'Data/UserContext';
import { getConsumerById } from '../Services/Consumer'
import { useContext } from 'react';



import { IAlbum, IConsumer, IEvent, IMerchandise } from 'Data/DataTypes';

//components 
import UserProfileView from 'Components/FormComponents/DataComponents/UserProfileView';





const UserPage: React.FunctionComponent = () => {
  const location = useLocation();
  const { currentId, name } = useContext(UserContext);

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



  return (
    <>
      {
        user.username === name ? <UserProfileView></UserProfileView> : null
      }
    </>)
}

export default UserPage;

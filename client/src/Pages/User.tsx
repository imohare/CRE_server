//react
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserContext } from 'Data/UserContext';
import { getConsumerById, getConsumerPointsByConsumerId } from '../Services/Consumer'
import { useContext } from 'react';

import { getConsumerAlbumTokensByConsumerId } from 'Services/AlbumToken';
import { getConsumerEventTokensByConsumerId } from 'Services/EvenToken';
import { getConsumerMerchTokensByConsumerId } from 'Services/MerchToken';
import ScrollList from 'Components/ReuseableComponents/ScrollList';
import { AlbumCardTemplate, EventCardTemplate, MerchCardTemplate } from 'Components/ReuseableComponents/CardTemplates';
import { IAlbum, IConsumer, IEvent, IMerchandise, IPoints } from 'Data/DataTypes';


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
  const [totalPoints, setTotalPoints] = useState(0);
  const [pointData, setPointData] = useState<IPoints[] | []>([]);

  let pointArtists: Promise<any>[] = [];


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
    getConsumerPointsByConsumerId(currentId)
      .then(pointData => {
        let points = 0;
        pointData.map(async (entry: IPoints) => {
          points += entry.points;
          setTotalPoints(points);
        })
        setPointData(pointData);
      })
    
     }, [])




  return (
    <>

      {
        user.username === name ? <UserProfileView></UserProfileView> : null
      }

   
    </>)
}

export default UserPage;

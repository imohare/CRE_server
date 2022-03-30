//react
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserContext } from 'Data/UserContext';
import { getConsumerById, getConsumerPointsByConsumerId } from '../Services/Consumer'
import { useContext } from 'react';
import { getConsumerAlbumTokensByConsumerId } from 'Services/AlbumToken';
import { getConsumerEventTokensByConsumerId } from 'Services/EvenToken';
import { getConsumerMerchTokensByConsumerId } from 'Services/MerchToken';
import ScrollList from 'Components/ReuseableComponents/ScrollList';
import { AlbumCardTemplate, EventCardTemplate, MerchCardTemplate } from 'Components/ReuseableComponents/CardTemplates';
import { IAlbum, IAlbumToken, IArtist, IConsumer, IEvent, IEventToken, IMerchandise, IMerchToken, IPoints } from 'Data/DataTypes';
import './User.css'
import StyledPage from 'Styles/styledComponents/styledPage';
import { getEventById } from 'Services/Event';
import { getArtistById } from 'Services/Artist';
import { getAlbumById } from 'Services/Album';
import { getMerchandiseById } from 'Services/Merchandise';
import StyledButton from 'Styles/styledComponents/StyledButton';

const UserPage: React.FunctionComponent = () => {
  const location = useLocation();
  const { currentId } = useContext(UserContext);

  const [albumTokens, setAlbumTokens] = useState<IAlbumToken[] | []>([]);
  const [album, setAlbum] = useState<IAlbum>();
  const [albumArr, setAlbumArr] = useState<IAlbum[]| []>([]);

  const [eventTokens, setEventTokens] = useState<IEventToken[] | []>([]);
  const [event, setEvent] = useState<IEvent>();
  const [eventArr, setEventArr] = useState<IEvent[]| []>([]);

  const [merchTokens, setMerchTokens] = useState<IMerchToken[] | []>([]);
  const [merch, setMerch] = useState<IMerchandise>();
  const [merchArr, setMerchArr] = useState<IMerchandise[]| []>([]);

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
      .then(albumTokens => {
        console.log(albumTokens, "albumTokens")
        setAlbumTokens(albumTokens);
        console.log(albumTokens, "albumTokensset")

        albumTokens.map(async (albumToken: any) => {
          let albumId = albumToken.AlbumId
          console.log(albumId, "albumId")
          let album1: IAlbum = await getAlbumById(albumId)
          setAlbum(album1);
          setAlbumArr(prev => {
            return [...prev, album1]
          })
        })
      })
    getConsumerEventTokensByConsumerId(currentId)
      .then(eventTokens => {
        setEventTokens(eventTokens);
        console.log("eventTokens", eventTokens)
        eventTokens.map(async (eventToken: any) => {
          let eventId = eventToken.EventId
          let event1: IEvent = await getEventById(eventId)
          setEvent(event1);
          setEventArr(prev => {
            return [...prev, event1]
          })
        })
      })
    getConsumerMerchTokensByConsumerId(currentId)
    .then(merchTokens => {
      setMerchTokens(merchTokens);
      console.log("merchTokens", merchTokens)
      merchTokens.map(async (merchToken: any) => {
        let merchId = merchToken.MerchId
        let merch1: IMerchandise = await getMerchandiseById(merchId)
        setMerch(merch1);
        setMerchArr(prev => {
          return [...prev, merch1]
        })
      })
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


  let navigate = useNavigate();
  const homeRouteChange = () => {
    let path = `/`;
    navigate(path);
  }

  return (
    <StyledPage>
        <div className="hotBar"></div>
        <div className="UserProfile">
          <StyledButton onClick={homeRouteChange}> home </StyledButton>
          <div className="banner">
            <br />
            <br />
            <div className="PP">
              <img src={user.profile_picture} className="item" alt='img' />
            </div>
          </div>

          <div className="UserNFTs">
            <h1>@{user.username}'s Profile</h1>
            <h2>Points: {totalPoints}</h2>

            <ScrollList title='Your NFT Events'>
              {/* @ts-ignore */}
             {(eventArr.length > 0) ? eventArr.map(event => <EventCardTemplate event={event} key={event.id} background={event.tokens_image} />) 
              : null}
          </ScrollList>

          <ScrollList title='Your NFT Albums'>
              {/* @ts-ignore */}
             {(albumArr.length > 0) ? albumArr.map(album => <AlbumCardTemplate album={album} key={album.id} background={album.tokens_image} />) 
              : null}
          </ScrollList>

          <ScrollList title='Your NFT Merchandise'>
              {/* @ts-ignore */}
             {(merchArr.length > 0) ? merchArr.map(merch => <MerchCardTemplate merchandise={merch} key={merch.id} background={merch.tokens_image} />) 
              : null}
          </ScrollList>


          </div>
        </div>
      
    </StyledPage >
  )
}

export default UserPage;

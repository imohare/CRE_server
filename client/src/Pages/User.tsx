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
import { IAlbum, IAlbumToken, IArtist, IConsumer, IEvent, IEventToken, IMerchandise, IMerchToken, IPoints } from 'Data/DataTypes';
import './User.css'
import StyledPage from 'Styles/styledComponents/styledPage';
import { getEventById } from 'Services/Event';
import { getArtistById } from 'Services/Artist';

const UserPage: React.FunctionComponent = () => {
  const location = useLocation();
  const { currentId } = useContext(UserContext);

  const [albumTokens, setAlbumTokens] = useState<IAlbumToken[] | []>([]);
  const [eventTokens, setEventTokens] = useState<IEventToken[] | []>([]);
  const [event, setEvent] = useState<IEvent>();
  const [merchandiseTokens, setMerchandiseTokens] = useState<IMerchToken[] | []>([]);
  const [eventArr, setEventArr] = useState<IEvent[] | []>([]);
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
        setAlbumTokens(response);
        return response;
      })
    getConsumerEventTokensByConsumerId(currentId)
      .then(eventTokens => {
        setEventTokens(eventTokens);
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
      .then(response => {
        setMerchandiseTokens(response);
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


  console.log("eventsArr2", eventArr);

  return (
    <StyledPage>
      <>
        <div className="hotBar"></div>
        <div className="UserProfile">
          <Link to="/"> {`<`} </Link>
          <div className="banner">
            <br />
            <br />
            <div className="PP">
              <img src={user.profile_picture} className="item" alt='img' />
            </div>
          </div>
          {/* {(pointData.length > 0) ? pointData.map((pointEntry: IPoints) => {
            const artistId: number = pointEntry.ArtistId;
            const artist: IArtist = getArtistById(artistId);
            return <h2>{artist.name}: {pointEntry.points}</h2>
          }) : null} */}

          <div className="UserNFTs">
            <h1>@{user.username}'s Profile</h1>
            <h2>Points: {totalPoints}</h2>




            {/* <ScrollList title='Your NFT Events'>
              {/* @ts-ignore */}
            {/* {(eventArr.length) ? event.map(event => <EventCardTemplate event={event} key={event.id} background={event.tokens_image} />)
              : null}
          </ScrollList> */}
            {/* 
            <ScrollList title='Your NFT Albums'>
              {(albums.length > 0) ? albums.map(album => <AlbumCardTemplate album={album} key={album.id} background={album.tokens_image} />)
                : null}
            </ScrollList>

            <ScrollList title='Your NFT Merchandise'>
              {(merchandises.length > 0) ? merchandises.map(merchandise => <MerchCardTemplate merchandise={merchandise} key={merchandise.id} background={merchandise.tokens_image} />)
                : null}
            </ScrollList> */}


          </div>
        </div>
      </>
    </StyledPage >
  )
}

export default UserPage;

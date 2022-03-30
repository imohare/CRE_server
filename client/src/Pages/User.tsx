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
import './User.css'
import StyledPage from 'Styles/styledComponents/styledPage';

const UserPage: React.FunctionComponent = () => {
  const location = useLocation();
  const { currentId } = useContext(UserContext);

  const [albums, setAlbums] = useState<IAlbum[] | []>([]);
  const [events, setEvents] = useState<IEvent[] | []>([]);
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
    <StyledPage>
      <>
        <div className="hotBar"></div>
        <div className="UserProfile">
          <Link to="/"> {`<`} </Link>
          <div className="banner">
            <br />
            <br />
            <div className="PP">
              <img src={user.profile_picture} className="item" />
            </div>
          </div>
          {/* { (pointData.length > 0) ? pointData.map((pointEntry: IPoints) => {
            const artistId: number  = pointEntry.ArtistId;
            const artist: IArtist = getArtistById(artistId);
            return <h2>{artist.name}: {pointEntry.points}</h2>
          }) : null } */}

          <div className="UserNFTs">
            <h1>@{user.username}'s Profile</h1>
            <h2>Points: {totalPoints}</h2>



            <ScrollList title='Your NFT Events'>
              {(events.length > 0) ? events.map(event => <div key={event.id}>
                <EventCardTemplate event={event} background={event.tokens_image} />
              </div>)
                : null}
            </ScrollList>

            <ScrollList title='Your NFT Albums'>
              {(albums.length > 0) ? albums.map(album => <div key={album.id}>
                <AlbumCardTemplate album={album} background={album.tokens_image}/>
              </div>)
                : null}
            </ScrollList>
            <ScrollList title='Your NFT Merchandise'>
              {(merchandises.length > 0) ? merchandises.map(merchandise => <div key={merchandise.id}>
                <MerchCardTemplate merchandise={merchandise} background={merchandise.tokens_image} />
              </div>)
                : null}
            </ScrollList>


          </div>
        </div>
      </>
    </StyledPage>
  )
}

export default UserPage;

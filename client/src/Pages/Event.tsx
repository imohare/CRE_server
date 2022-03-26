import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import moment from 'moment';

import { IArtist, IEventToken } from 'Data/DataTypes';

import { getEventById } from 'Services/Event';
import { getArtistById } from '../Services/Artist';
import { getEventTokensByEventId } from '../Services/EvenToken';
import { eventTokenPurchase } from 'Services/Purchase';

import { UserContext } from 'Data/UserContext';

import "./Event.css"

const EventPage: React.FunctionComponent = () => {
    const location = useLocation();
    console.log("location", location)
    const {currentId} = useContext(UserContext);
    console.log("currentId", currentId);

    const [eventData, setEventData] = useState({
        id: 0,
        name: '',
        address: '',
        date: new Date(),
        description: '',
        number_of_tokens: 0,
        tokens_image: '',
        tokens_value: 0,
        ArtistId: 0
    });

    const [artistData, setArtistData] = useState<IArtist>({
        id: 0, 
        eth_address: '',
        name: '',
        profile_picture: '',
        website: '',
        createdAt: new Date('2022-03-25T19:36:22.920Z'),
        updatedAt: new Date('2022-03-25T19:36:22.920Z'),
    });

    const [eventTokenData, setEventTokenData] = useState<IEventToken[]>([])

    const [availableTokens, setAvailableTokens] = useState<IEventToken[]>([{
        id: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ArtistId: 0,
        EventId: 0,
    }]);

    useEffect(() => {
        const eventId: number = parseInt(location.pathname.replace(/[^0-9.]+/g, ''))
        getEventById(eventId)
            .then(async response => {
                setEventData(response);
                const artistId = response.ArtistId;
                const artist = getArtistById(artistId);
                setArtistData(await artist);
            })
        getEventTokensByEventId(eventId)
            .then(async response => {
                setEventTokenData( await response)
                const availTokens = response.filter((token: IEventToken) => token.ConsumerId === null);
                setAvailableTokens(await availTokens);
            })
    }, [])

    const handleClick = () => {
        eventTokenPurchase(currentId, availableTokens[0].id, artistData.id, eventData.id);
      };
    
    const checkIfUserHasBought = (): boolean => {
        const consumerBoughtToken = eventTokenData.filter(token => token.ConsumerId === currentId)
        if (consumerBoughtToken) return true
        else return false
    }

    return (
        <>
            <div className="EventOverall">
                <div className="links">
                    <Link to="/">home</Link>
                    <Link to="/artist">artist</Link>
                </div>
                <div className="eventPicAndTitle">
                    <div className="eventPic">
                        <img src={eventData.tokens_image} alt="event cover" />
                    </div>
                    <div className="eventTitle">
                        < h1 > {eventData.name}</h1 >
                        <div className="dateAndName">
                            <h3>{moment(eventData.date).format('yyyy')}</h3>
                            <h2>    *    </h2>
                            <h2>{artistData.name}</h2>
                        </div>
                    </div>
                </div>
                <div className="secondHalf">
                    <div>
                        <h2>Description:</h2>
                        <p>{eventData.description}</p>
                    </div>
                    <div className="eventTokenInfo">
                        <div>
                            <h4>TOKEN INFO</h4>
                            <div>Number of Tokens: {eventData.number_of_tokens}</div>
                            <div>Token value: {eventData.tokens_value}</div>
                            {(availableTokens.length > 0)  ? ((checkIfUserHasBought()) ?  <button>NFT purchased</button> : <button onClick={handleClick}>purchase event NFT</button>) : <button>Event Sold Out</button>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventPage;
//react
import { Link, useLocation } from 'react-router-dom';
//react
import { useState, useContext, useEffect } from 'react';
import { getEventTokenByEventId } from '../Services/EvenToken';
import { getArtistById } from '../Services/Artist';
import "./Event.css"
import moment from 'moment';

// simport { listenerCount } from 'process';
import { IArtist, IEvent, IEventToken } from 'Data/DataTypes';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { getEventById } from 'Services/Event';

//components
//styling

const EventPage: React.FunctionComponent = () => {
    const location = useLocation();

    const [eventData, setEventData] = useState({
        id: 0,
        name: '',
        address: '',
        date: '2022-03-25T19:36:22.920Z', //wtf am i meant to input here
        description: '',
        number_of_tokens: 0,
        tokens_image: '',
        tokens_value: 0,
        ArtistId: 0
    });
    const [eventTokenData, setEventTokenData] = useState<IEventToken>();
    const [artistData, setArtistData] = useState<IArtist>();

    const setEventInfo = async (eventId: number) => {
        const event = await getEventById(eventId);
        setEventData(event);
        // now we have event in eventData
    }

    const setEventTokenInfo = async (eventId: number): Promise<void> => {
        const eventToken: IEventToken = await getEventTokenByEventId(eventId);
        setEventTokenData(eventToken);
        // now we have token in eventTokenData
    }

    const setArtistInfo = async (artistId: number) => {
        const artistInfo: IArtist = await getArtistById(artistId);
        setArtistData(artistInfo);
        // now we have artist in artistData
    }

    useEffect(() => {
        const eventId: number = parseInt(location.pathname.replace(/[^0-9.]+/g, ''))
        setEventInfo(eventId);
        setEventTokenInfo(eventId);
        const artistId = eventData.ArtistId;
        setArtistInfo(artistId);
    }, [])

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
                            <h3>Lancey Foux</h3>
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
                            <button>purchase event</button>
                        </div>
                    </div>
                    {/* <p>artist view without event purchase</p>
                    <p>public view without event purchase (redirect to login page?)</p> */}
                </div>
            </div>
        </>

    )
}

export default EventPage;
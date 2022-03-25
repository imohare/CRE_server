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

    const [eventData, setEventData] = useState<IEvent>();
    const [eventTokenData, setEventTokenData] = useState<IEventToken>();
    const [artistData, setArtistData] = useState<IArtist>();

    const getEventInfo = async (eventId: number) => {
        const event = await getEventById(eventId);
        setEventData(event);
    }

    const getEventTokenInfo = async (eventId: number) => {
        const eventToken = await getEventTokenByEventId(eventId);
        setEventTokenData(eventToken);
    }

    const getArtistInfo = async (artistId: number) => {
        const artistInfo = await getArtistById(artistId);
        setArtistData(artistInfo);
    }

    useEffect(() => {
        const eventId: number = parseInt(location.pathname.replace(/[^0-9.]+/g, ''))
        getEventInfo(eventId);
        const _eventToken = getEventTokenInfo(eventId);
        setEventTokenData(_eventToken)
        // console.log(_eventToken);
        const artistId = eventData.ArtistId;
        getArtistInfo(artistId);
        console.log(artistData);
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
                            <h3>{moment(eventData.year).format('yyyy')}</h3>
                            <h2>    *    </h2>
                            <h3>Lancey Foux</h3>
                            {/* <h2>{artistData.name}</h2> */}
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
                            <div>Token value: {eventData.number_of_tokens}</div>


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
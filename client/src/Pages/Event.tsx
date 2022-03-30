import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import moment from 'moment';

import { IArtist, IEventToken } from 'Data/DataTypes';

import { getEventById } from 'Services/Event';
import { getArtistById } from '../Services/Artist';
import { getEventTokensByEventId } from '../Services/EvenToken';
import { eventTokenPurchase } from 'Services/Purchase';

import { UserContext } from 'Data/UserContext';

import "./Event.css"
import { Box, Card, Flex, Image, Text } from 'rebass';
import StyledButton from 'Styles/styledComponents/StyledButton';

const EventPage: React.FunctionComponent = () => {
    const location = useLocation();
    const { currentId } = useContext(UserContext);

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
        console.log(eventId, "eventId")
        getEventById(eventId)
            .then(evnt => {
                console.log(evnt, "Event")
                setEventData(evnt);
                const artistId = evnt.ArtistId;
                return artistId
            })
            .then(artistId => {
                const artist = getArtistById(artistId);
                return artist;
            })
            .then(artist => {
                setArtistData(artist)
            });

        getEventTokensByEventId(eventId)
            .then(response => {
                setEventTokenData(response)
                const availTokens = response.filter((token: IEventToken) => token.ConsumerId === null);
                setAvailableTokens(availTokens);
            })
    }, [])

    const handleClick = () => {
        eventTokenPurchase(currentId, availableTokens[0].id, artistData.id, eventData.id);
    };

    const checkIfUserHasBought = (): boolean => {
        const consumerBoughtToken = eventTokenData.filter(token => token.ConsumerId === currentId)
        if (consumerBoughtToken.length > 0) return true
        else return false
    }

    let navigate = useNavigate();
    const homeRouteChange = () => {
        let path = `/`;
        navigate(path);
    }
    const profileRouteChange = () => {
        let path = `/user/${currentId}`;
        navigate(path);
    }

    return (
        <>
            <div className="EventOverall">
                <div className="links">
                    <StyledButton onClick={homeRouteChange} >home</StyledButton>
                    <StyledButton onClick={profileRouteChange} >profile</StyledButton>
                </div>
                <br /> <br /> <br />
                <Flex>
                    <Box width={1/2}>
                    <Card width={[ 256, 320 ]} mx='auto'>
                    <Image src={eventData.tokens_image} />
                    </Card>
                    </Box>
                    <Box width={1/2}>
                    <Flex>
                        <Text fontSize={[ 30, 40, 50 ]} fontWeight='bold' color='#c6c6c6' fontFamily='Raleway'> {eventData.name}</Text >
                    </Flex>
                    <Flex>
                        <Box>
                        <Text fontSize={[ 10, 20, 30 ]} color='#c6c6c6' fontFamily='Raleway'>{moment(eventData.date).format('yyyy')}</Text>
                        <Text  fontSize={[ 10, 20, 30 ]} fontWeight='bold' color='#c6c6c6' fontFamily='Raleway'> //</Text>
                        <Text  fontSize={[ 20, 30, 40 ]} color='#c6c6c6' fontFamily='Raleway'>{artistData.name}</Text>
                        </Box>
                    </Flex>
                    </Box>
                </Flex>
                <br /> <br /><br /><br /><br />
                <Flex>
                    <Box width={4 / 12}>
                        <h2>Description:</h2>
                        <h4>{eventData.description}</h4>
                    </Box>
                    <Box width={1 / 12} />
                    <Box width={3 / 8}>
                        <h2>Token Info: </h2>
                        <h4> - Number of Tokens: {eventData.number_of_tokens}</h4>
                        <h4> - Token value: {eventData.tokens_value}</h4>
                    </Box>
                    <Box width={4 / 12}>
                        <br />
                        {(availableTokens.length > 0) ? ((checkIfUserHasBought()) ? <StyledButton>NFT purchased</StyledButton> : <StyledButton onClick={handleClick}>purchase event NFT</StyledButton>) : <StyledButton>Event Sold Out</StyledButton>}
                    </Box>
                </Flex>

            </div>
        </>
    )
}

export default EventPage;
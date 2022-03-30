import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import moment from 'moment';

import { IArtist, IMerchToken } from 'Data/DataTypes';

import { getMerchandiseById } from 'Services/Merchandise';
import { getArtistById } from '../Services/Artist';
import { getMerchTokensByMerchId } from '../Services/MerchToken';
import { merchandiseTokenPurchase } from 'Services/Purchase';

import { UserContext } from 'Data/UserContext';
import { Flex, Box, Card, Image, Text } from 'rebass';

import './Merchandise.css'
import StyledButton from 'Styles/styledComponents/StyledButton';

const MerchandisePage: React.FunctionComponent = () => {
    const location = useLocation();
    const { currentId } = useContext(UserContext);

    const [merchandiseData, setMerchandiseData] = useState({
        id: 0,
        name: '',
        type: '',
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

    const [merchandiseTokenData, setMerchandiseTokenData] = useState<IMerchToken[]>([])

    const [availableTokens, setAvailableTokens] = useState<IMerchToken[]>([{
        id: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ArtistId: 0,
        MerchId: 0,
    }]);

    useEffect(() => {
        const merchandiseId: number = parseInt(location.pathname.replace(/[^0-9.]+/g, ''))
        getMerchandiseById(merchandiseId)
            .then(response => {
                setMerchandiseData(response);
                return response;
            })
            .then(evt => {
                const artistId = evt.ArtistId;
                return artistId;
            })
            .then(artistId => {
                const artist = getArtistById(artistId);
                return artist;
            })
            .then(artist => {
                setArtistData(artist)
            });

        getMerchTokensByMerchId(merchandiseId)
            .then(response => {
                setMerchandiseTokenData(response)
                const availTokens = response.filter((token: IMerchToken) => token.ConsumerId === null);
                setAvailableTokens(availTokens);
            })
    }, [])

    const handleClick = () => {
        merchandiseTokenPurchase(currentId, availableTokens[0].id, artistData.id, merchandiseData.id);
    };

    const checkIfUserHasBought = (): boolean => {
        const consumerBoughtToken = merchandiseTokenData.filter(token => token.ConsumerId === currentId)
        if (consumerBoughtToken) return true
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
            <div className="MerchandiseOverall">
                <div className="links">
                    <StyledButton onClick={homeRouteChange} >home</StyledButton>
                    <StyledButton onClick={profileRouteChange} >profile</StyledButton>
                </div>
                <br /> <br /> <br />
                <Flex>
                    <Box width={1/2}>
                    <Card width={[ 256, 320 ]} mx='auto'>
                    <Image src={merchandiseData.tokens_image} />
                    </Card>
                    </Box>
                    <Box width={1/2}>
                    <Flex>
                        <Text fontSize={[ 30, 40, 50 ]} fontWeight='bold' color='#c6c6c6' fontFamily='Raleway'> {merchandiseData.name}</Text >
                    </Flex>
                    <Flex>
                        <Box>
                        <Text fontSize={[ 10, 20, 30 ]} color='#c6c6c6' fontFamily='Raleway'>{moment(merchandiseData.type).format('yyyy')}</Text>
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
                            <h4>{merchandiseData.description}</h4>
                        </Box>
                        <Box width={1 / 12} />
                        <Box width={3 / 8}>
                            <h2>Token Info: </h2>
                            <h4> - Number of Tokens: {merchandiseData.number_of_tokens}</h4>
                            <h4> - Token value: {merchandiseData.tokens_value}</h4>
                        </Box>
                        <Box width={4 / 12}>
                            <br />
                            {(availableTokens.length > 0) ? ((checkIfUserHasBought()) ? <StyledButton>NFT purchased</StyledButton> : <StyledButton onClick={handleClick}>purchase merchandise NFT</StyledButton>) : <StyledButton>Merchandise Sold Out</StyledButton>}
                        </Box>
                    </Flex>
                </div>
        </>
    )
}

export default MerchandisePage;
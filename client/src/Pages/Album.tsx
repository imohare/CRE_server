import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';

import moment from 'moment';

import { getAlbumById } from '../Services/Album';
import { getAlbumTokenByAlbumId } from '../Services/AlbumToken';
import { getArtistById } from '../Services/Artist';
import { albumTokenPurchase } from 'Services/Purchase';

import "./Album.css"

import { IAlbumToken, IArtist } from 'Data/DataTypes';

import { UserContext } from 'Data/UserContext';
import { Box, Card, Flex, Image, Text } from 'rebass';
import StyledButton from 'Styles/styledComponents/StyledButton';

const AlbumPage: React.FunctionComponent = () => {
    const location = useLocation();
    const { currentId } = useContext(UserContext);

    const [albumData, setAlbumData] = useState({
        id: 0,
        name: '',
        year: '023-03-21T11:13:00.035Z',
        description: '',
        number_of_tokens: 0,
        tokens_image: '',
        tokens_value: 0,
        ArtistId: 0
    });
    const [albumTokenData, setAlbumTokenData] = useState<IAlbumToken[]>([]);

    const [artistData, setArtistData] = useState<IArtist>({
        id: 0,
        eth_address: '',
        name: '',
        profile_picture: '',
        website: '',
        createdAt: new Date('2022-03-25T19:36:22.920Z'),
        updatedAt: new Date('2022-03-25T19:36:22.920Z'),
    });

    const [availableTokens, setAvailableTokens] = useState<IAlbumToken[]>([{
        id: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        ArtistId: 0,
        AlbumId: 0,
    }]);

    useEffect(() => {
        const albumId: number = parseInt(location.pathname.replace(/[^0-9.]+/g, ''))
        getAlbumById(albumId)
            .then(response => {
                setAlbumData(response);
                console.log(response);
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
        getAlbumTokenByAlbumId(albumId)
            .then(response => {
                setAlbumTokenData(response)
                const availTokens = response.filter((token: IAlbumToken) => token.ConsumerId === null);
                setAvailableTokens(availTokens);
            })


        // getArtistB
    }, [])

    const handleClick = () => {
        albumTokenPurchase(currentId, availableTokens[0].id, artistData.id, albumData.id);
    };

    const checkIfUserHasBought = (): boolean => {
        const consumerBoughtToken = albumTokenData.filter(token => token.ConsumerId === currentId)
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
            <div className="AlbumOverall">
                <div className="links">
                    <StyledButton onClick={homeRouteChange} >home</StyledButton>
                    <StyledButton onClick={profileRouteChange} >artist</StyledButton>
                </div>
                <br /> <br /> <br />
                <Flex>
                    <Box width={1/2}>
                    <Card width={[ 256, 320 ]} mx='auto'>
                    <Image src={albumData.tokens_image} />
                    </Card>
                    </Box>
                    <Box width={1/2}>
                    <Flex>
                        <Text fontSize={[ 30, 40, 50 ]} fontWeight='bold' color='#c6c6c6' fontFamily='Raleway'> {albumData.name}</Text >
                    </Flex>
                    <Flex>
                        <Box>
                        <Text fontSize={[ 10, 20, 30 ]} color='#c6c6c6' fontFamily='Raleway'>{moment(albumData.year).format('yyyy')}</Text>
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
                        <h4>{albumData.description}</h4>
                    </Box>
                    <Box width={1 / 12} />
                    <Box width={3 / 8}>
                        <h2>Token Info:</h2>
                        <h4> - Number of Tokens: {albumData.number_of_tokens}</h4>
                        <h4> - Token value: {albumData.number_of_tokens}</h4>
                    </Box>
                    <Box width={4 / 12}>
                        <br />
                        {(availableTokens.length > 0) ? ((checkIfUserHasBought()) ? <StyledButton>NFT purchased</StyledButton> : <StyledButton onClick={handleClick}>purchase album NFT</StyledButton>) : <StyledButton >Album Sold Out</StyledButton>}
                    </Box>
                </Flex>
            </div>


        </>
    )
}
export default AlbumPage;
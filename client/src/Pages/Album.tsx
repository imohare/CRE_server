import { Link, useLocation } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';

import moment from 'moment';

import { getAlbumById } from '../Services/Album';
import { getAlbumTokenByAlbumId } from '../Services/AlbumToken';
import { getArtistById } from '../Services/Artist';
import { albumTokenPurchase } from 'Services/Purchase';

import "./Album.css"

import { IAlbumToken, IArtist } from 'Data/DataTypes';

import { UserContext } from 'Data/UserContext';
import { Box, Flex } from 'rebass';

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

    return (
        <>
            <div className="AlbumOverall">
                <div className="links">
                    <Link to="/">home</Link>
                    <Link to="/artist">artist</Link>
                </div>
                <div className="albumPicAndTitle">
                    <div className="albumPic">
                        <img src={albumData.tokens_image} alt="album cover" />
                    </div>
                    <div className="albumTitle">
                        < h1 > {albumData.name}</h1 >
                        <div className="dateAndName">
                            <h3>{moment(albumData.year).format('yyyy')}</h3>
                            <h2>    *    </h2>
                            <h3>{artistData.name}</h3>
                        </div>
                    </div>
                </div>
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
                        {(availableTokens.length > 0) ? ((checkIfUserHasBought()) ? <button>NFT purchased</button> : <button onClick={handleClick}>purchase album NFT</button>) : <button>Album Sold Out</button>}
                    </Box>
                </Flex>
            </div>
        </>
    )
}
export default AlbumPage;
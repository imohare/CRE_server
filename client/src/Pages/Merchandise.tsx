import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import moment from 'moment';

import { IArtist, IMerchToken } from 'Data/DataTypes';

import { getMerchandiseById } from 'Services/Merchandise';
import { getArtistById } from '../Services/Artist';
import { getMerchTokensByMerchId } from '../Services/MerchToken';
import { merchandiseTokenPurchase } from 'Services/Purchase';

import { UserContext } from 'Data/UserContext';
import { Flex, Box } from 'rebass';

const MerchandisePage: React.FunctionComponent = () => {
    const location = useLocation();
    const {currentId} = useContext(UserContext);

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
                const availTokens =  response.filter((token: IMerchToken) => token.ConsumerId === null);
                setAvailableTokens( availTokens);
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

    return (
        <>
            <div className="MerchandiseOverall">
                <div className="links">
                    <Link to="/">home</Link>
                    <Link to="/artist">artist</Link>
                </div>
                <div className="merchandisePicAndTitle">
                    <div className="merchandisePic">
                        <img src={merchandiseData.tokens_image} alt="merchandise cover" />
                    </div>
                    <div className="merchandiseTitle">
                        < h1 > {merchandiseData.name}</h1 >
                        <div className="dateAndName">
                            <h3>{merchandiseData.type}</h3>
                            <h2>{artistData.name}</h2>
                        </div>
                    </div>
                </div>
                <Flex>
                    <Box width= {4/12}>
                        <h2>Description:</h2>
                        <h4>{merchandiseData.description}</h4>
                    </Box>
                    <Box width= {1/12}/>
                    <Box width= {3/8}>
                        <h2>Token Info: </h2>
                        <h4> - Number of Tokens: {merchandiseData.number_of_tokens}</h4>
                        <h4> - Token value: {merchandiseData.tokens_value}</h4>
                    </Box>
                    <Box width= {4/12}>
                        <br/>
                            {(availableTokens.length > 0)  ? ((checkIfUserHasBought()) ?  <button>NFT purchased</button> : <button onClick={handleClick}>purchase merchandise NFT</button>) : <button>Merchandise Sold Out</button>}
                    </Box>
                </Flex>
            </div>
        </>
    )
}

export default MerchandisePage;
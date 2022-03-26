//react
import { Link, useLocation } from 'react-router-dom';
//components
//styling
import { useState, useContext, useEffect } from 'react';
import { getMerchandiseById } from '../Services/Merchandise';
import { getMerchTokenById } from '../Services/MerchToken';
import { getArtistById } from '../Services/Artist';
import "./Album.css"
import moment from 'moment';



const MerchandisePage: React.FunctionComponent = () => {
    //if user && logged in, allow ticket purchase. If artist, no ticket purchase possible. 
    //If not logged in, greyed out and redirect to login page

    const location = useLocation();

    const [merchData, setMerchData] = useState({
        id: 0,
        name: '',
        type: '',
        description: '',
        number_of_tokens: 0,
        tokens_image: '',
        tokens_value: 0,
        ArtistId: 0
    })
    const [merchTokenData, setMerchTokenData] = useState({});
    const [artistData, setArtistData] = useState({});


    //handler function
    const getMerchInfo = async (merchId: number) => {
        const merch = await getMerchandiseById(merchId);
        setMerchData(merch);
    }

    const getMerchTokenInfo = async (merchId: number) => {
        const merchToken = await getMerchTokenById(merchId);
        setMerchTokenData(merchToken);
    }

    const getArtistInfo = async (artistId: number) => {
        const artistInfo = await getArtistById(artistId);
        setArtistData(artistInfo);
    }

    useEffect(() => {
        const merchId: number = parseInt(location.pathname.replace(/[^0-9.]+/g, ''))
        console.log("merchID in useEffect", merchId);
        getMerchInfo(merchId);
        const _merchToken = getMerchTokenInfo(merchId);
        setMerchTokenData(_merchToken);
        const artistId = merchData.ArtistId;
        getArtistInfo(artistId);
        console.log(artistData);

    }, [])


    return (
        <>
            <Link to="/">home</Link>
            <Link to="/artist">artist</Link>
            < h1 > merchandise page</h1 >
            {/* <p>user view with merchandise purchase</p>
            <button>purchase merchandise</button>
            <p>artist view without merchandise purchase</p>
            <p>public view without merchandise purchase (redirect to login page?)</p> */}
        </>
    )
}

export default MerchandisePage;
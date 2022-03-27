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
import './Merchandise.css'



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
    const getMerchInfo = async (merchandiseId: number) => {
        const merch = await getMerchandiseById(merchandiseId);
        setMerchData(merch);
    }

    const getMerchTokenInfo = async (merchandiseId: number) => {
        const merchToken = await getMerchTokenById(merchandiseId);
        setMerchTokenData(merchToken);
    }

    const getArtistInfo = async (artistId: number) => {
        const artistInfo = await getArtistById(artistId);
        setArtistData(artistInfo);
    }

    useEffect(() => {
        const merchandiseId: number = parseInt(location.pathname.replace(/[^0-9.]+/g, ''))
        console.log("merchID in useEffect", merchandiseId);
        getMerchInfo(merchandiseId);
        // const _merchToken = getMerchTokenInfo(merchandiseId);
        // // console.log(_merchToken)
        // setMerchTokenData(_merchToken);
        // const artistId = merchData.ArtistId;
        // getArtistInfo(artistId);
        // console.log(artistData);

    }, [])

    useEffect(() => { console.log(merchData) }, [merchData])

    return (
        <>
            <Link to="/">home</Link>
            <Link to="/artist">artist</Link>
            <div className="merchStyling">
                <div className="albumPic">
                    <img src={merchData.tokens_image} alt="picture of the merch"></img>
                </div>
                <div className="dataHalf">
                    <h1>TOKEN INFO</h1>
                    <br></br>
                    <h3>Merch: {merchData.name}</h3>
                    <h3></h3>
                    <br></br>
                    <h3>Description: {merchData.description}</h3>
                    <br></br>

                    <h3>Number of Tokens: {merchData.number_of_tokens}</h3>
                    <h3>Token value: {merchData.number_of_tokens}</h3>
                    <br></br>

                    <button>Purchase Merch</button>


                </div>
            </div>


            {/* <h2>{merchData.description}</h2> */}
            {/* <p>user view with merchandise purchase</p>
            <button>purchase merchandise</button>
            <p>artist view without merchandise purchase</p>
            <p>public view without merchandise purchase (redirect to login page?)</p> */}
        </>
    )
}

export default MerchandisePage;
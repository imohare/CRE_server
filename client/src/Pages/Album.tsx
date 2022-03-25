//react
import { Link, useLocation } from 'react-router-dom';
//react
import { useState, useContext, useEffect } from 'react';
import { getAlbumById } from '../Services/Album';
//import { getAlbumTokenByAlbumId } from '../Services/AlbumToken';

// simport { listenerCount } from 'process';
import { IAlbum } from 'Data/DataTypes';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

//components
//styling

const AlbumPage: React.FunctionComponent = () => {
    //if user && logged in, allow ticket purchase. If artist, no ticket purchase possible. 
    //If not logged in, greyed out and redirect to login page
    const location = useLocation();

    const [albumData, setAlbumData] = useState({
        id: 0,
        name: '',
        year: '023-03-21T11:13:00.035Z',
        description: '',
        number_of_tokens: 0,
        tokens_image: '',
        tokens_value: 0
    });
    const [albumTokenData, setAlbumTokenData] = useState({});


    const getAlbumInfo = async (albumId: number) => {
        const album = await getAlbumById(albumId);
        setAlbumData(album);
    }

    // const getAlbumTokenInfo = async (albumId: number) => {
    //     const albumToken = await getAlbumTokenByAlbumId(albumId);
    //     setAlbumTokenData(albumToken);
    // }

    useEffect(() => {
        const albumId: number = parseInt(location.pathname.replace(/[^0-9.]+/g, ''))
        console.log("albumID in useEffect", albumId);
        getAlbumInfo(albumId);
        // const _albumToken = getAlbumTokenInfo(albumId);
        // console.log(_albumToken);
    }, [])


    return (
        <>
            <Link to="/">home</Link>
            <Link to="/artist">artist</Link>
            <img src={albumData.tokens_image} alt="album cover" />
            < h1 > album page</h1 >
            <p>user view with album purchase</p>
            <p>{albumData.name}</p>
            <button>purchase album</button>
            {/* <p>{albumTokenData.id}</p> */}
            <p>artist view without album purchase</p>
            <p>public view without album purchase (redirect to login page?)</p>
        </>
    )
}

export default AlbumPage;
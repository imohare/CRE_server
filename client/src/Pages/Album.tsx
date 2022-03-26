//react
import { Link, useLocation } from 'react-router-dom';
//react
import { useState, useContext, useEffect } from 'react';
import { getAlbumById } from '../Services/Album';
import { getAlbumTokenByAlbumId } from '../Services/AlbumToken';
import { getArtistById } from '../Services/Artist';
import "./Album.css"
import moment from 'moment';
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
        tokens_value: 0,
        ArtistId: 0
    });
    const [albumTokenData, setAlbumTokenData] = useState({});
    const [artistData, setArtistData] = useState({});
    const getAlbumInfo = async (albumId: number) => {
        const album = await getAlbumById(albumId);
        setAlbumData(album);
    }
    const getAlbumTokenInfo = async (albumId: number) => {
        const albumToken = await getAlbumTokenByAlbumId(albumId);
        setAlbumTokenData(albumToken);
    }
    const getArtistInfo = async (artistId: number) => {
        const artistInfo = await getArtistById(artistId);
        setArtistData(artistInfo);
    }
    useEffect(() => {
        const albumId: number = parseInt(location.pathname.replace(/[^0-9.]+/g, ''))
        console.log("albumID in useEffect", albumId);
        getAlbumInfo(albumId);
        const _albumToken = getAlbumTokenInfo(albumId);
        setAlbumTokenData(_albumToken)
        // console.log(_albumToken);
        const artistId = albumData.ArtistId;
        getArtistInfo(artistId);
        console.log(artistData);
    }, [])
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
                            <h3>Lancey Foux</h3>
                            {/* <h2>{artistData.name}</h2> */}
                        </div>
                    </div>
                </div>
                <div className="secondHalf">
                    <div>
                        <h2>Description:</h2>
                        <p>{albumData.description}</p>
                    </div>
                    <div className="albumTokenInfo">
                        <div>
                            <h4>TOKEN INFO</h4>
                            <div>Number of Tokens: {albumData.number_of_tokens}</div>
                            <div>Token value: {albumData.number_of_tokens}</div>
                            <button>purchase album</button>
                        </div>
                    </div>
                    {/* <p>artist view without album purchase</p>
                    <p>public view without album purchase (redirect to login page?)</p> */}
                </div>
            </div>
        </>
    )
}
export default AlbumPage;
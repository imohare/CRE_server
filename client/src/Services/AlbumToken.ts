const BASE_URL = 'http://localhost:3001'
import { IAlbumToken } from "Data/DataTypes"

//postAlbumToken
const postAlbumToken = (album: IAlbumToken) => {
    const requestOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify

    }

}



//getAlbumTokenById
const getAlbumTokenById = () => { }

//getAlbumTokens
const getAlbumTokens = () => { }

//getConsumersAlbumTokens
const getConsumersAlbumTokens = () => { }

//getArtistsAlbumTokens
const getArtistsAlbumTokens = () => { }
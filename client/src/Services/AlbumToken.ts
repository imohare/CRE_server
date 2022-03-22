import { IAlbumToken } from "Data/DataTypes"
import { resolveSoa } from "dns"
const BASE_URL = 'http://localhost:3001'

//postAlbumToken
const postAlbumToken = (album: IAlbumToken, artistId: number, consumerId: number) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(album)
    }
    return fetch(`${BASE_URL}/${artistId}/${consumerId}`, requestOptions)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

//getAlbumTokenById
const getAlbumTokenById = (tokenId: number) => {
    return fetch(`${BASE_URL}/getAlbumToken/${tokenId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

//getAlbumTokens
const getAlbumTokens = () => {
    return fetch(`${BASE_URL}/getAlbumTokens`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

//getConsumersAlbumTokens
const getConsumersAlbumTokens = (albumId: number, consumerId: number) => {
    return fetch(`${BASE_URL}/getConsumerAlbumTokens/${albumId}/${consumerId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

//getArtistsAlbumTokens
const getArtistsAlbumTokens = (artistId: number) => {
    return fetch(`${BASE_URL}/getArtistAlbumsTokens/${artistId}}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

export { postAlbumToken, getAlbumTokenById, getAlbumTokens, getConsumersAlbumTokens, getArtistsAlbumTokens }
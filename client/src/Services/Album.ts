import { IAlbum } from "../Data/DataTypes"
const BASE_URL = 'http://localhost:3001'

const createAlbum = (album: IAlbum, artistId: number) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            body: JSON.stringify(album)
        }
    }
    return fetch(`${BASE_URL}/createAlbum/${artistId}`, requestOptions)
        .then(res => res.json())
        .catch(err => console.log(err, "error"))
}

const getAllAlbums = () => {
    return fetch(`${BASE_URL}/getAlbums`)
        .then(res => res.json())
        .catch(err => console.log(err, "error"))
}

const getAlbumById = (albumId: number) => {
    return fetch(`${BASE_URL}/getAlbum/${albumId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "error"))
}

const getAllAlbumsbyArtistId = (artistId: number) => {
    return fetch(`${BASE_URL}/getArtistAlbums/${artistId}`)
        .then(res => res.json)
        .catch(err => console.log(err, "error"))
}

const getAlbumbyArtistId = (albumId: number, artistId: number) => {
    return fetch(`${BASE_URL}/getArtistAlbum/${albumId}/${artistId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "error"))
}

const deleteAlbum = (albumId: number) => {
    return fetch(`${BASE_URL}/deleteAlbum/${albumId}`,
        { method: "DELETE" });
}

export { createAlbum, getAllAlbums, getAlbumById, getAllAlbumsbyArtistId, getAlbumbyArtistId, deleteAlbum }


import { IAlbum } from "DataTypes"
const BASE_URL = 'http://localhost:3001'

//create album
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

//get all Albums

const getAllAlbums = () => {
    fetch(`${BASE_URL}/getAlbums`)
        .then(res => res.json())
        .catch(err => console.log(err, "error"))
}

//getAlbumById
const getAlbumById = (albumId: number) => {
    fetch(`${BASE_URL}/getAlbum/${albumId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "error"))
}


//getAllAlbumsOfArtist

const getAllAlbumsOfArtist = (artistId: number) => {
    fetch(`${BASE_URL}/getArtistAlbums/${artistId}`)
        .then(res => res.json)
        .catch(err => console.log(err, "error"))
}


//getThisAlbumByArtist
const getThisAlbumByArtist = (albumId: number, artistId: number) => {
    fetch(`${BASE_URL}/getArtistAlbum/${albumId}/${artistId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "error"))
}



export { createAlbum, getAllAlbums, getAlbumById, getAllAlbumsOfArtist, getThisAlbumByArtist }


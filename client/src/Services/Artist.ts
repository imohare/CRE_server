import { IArtist } from "../Data/DataTypes"
const BASE_URL = 'http://localhost:3001'

const createArtist = (artistData: IArtist) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(artistData)
    }
    return fetch(`${BASE_URL}/createArtist`, requestOptions)
        .then(res => res.json())
        .catch((err) => console.log(err, "error"))
}

const getArtists = () => {
    return fetch(`${BASE_URL}/getArtists`)
        .then(res => res.json())
        .catch((err => console.log(err, "error")))
}

const getArtistById = (artistId: number) => {
    return fetch(`${BASE_URL}/getArtistById/${artistId}`)
        .then(res => res.json)
        .catch(err => console.log(err, "error"))
}

const getArtistByName = (artistName: string) => {
    return fetch(`${BASE_URL}/getArtistByName/${artistName}`)
        .then(res => res.json)
        .catch(err => console.log(err, "error"))
}

const deleteArtist = (artistId: number) => {
    return fetch(`${BASE_URL}/deleteArtist/${artistId}`, 
    {method: "DELETE"});
}

export { createArtist, getArtists, getArtistById, getArtistByName, deleteArtist }
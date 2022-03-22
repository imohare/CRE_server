import { IMerch } from "../Data/DataTypes/MerchTypes"

const BASE_URL = 'http://localhost:3001';

const createMerch = (merch: IMerch) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(merch)
    }
    return fetch(BASE_URL, requestOptions)
        .then(res => res.json())
        .catch(err => console.log(err, "Error"))
}

//getEvents
const getMerch = () => {
    return fetch(`${BASE_URL}/getMerch`)
        .then(res => res.json())
        .catch((err => console.log(err, "error")))
}

//getEventById
const getMerchById = (merchId: number) => {
    return fetch(`${BASE_URL}/getMerch/${merchId}`)
        .then(res => res.json())
        .catch((err => console.log(err, "error")))
}


//getEventsByArtist
const getMerchByArtistId = (artistId: number) => {
    return fetch(`${BASE_URL}/getArtistEvents/${artistId}`)
        .then(res => res.json())
        .catch((err => console.log(err, "error")))
}

//getArtistEvent --> personally do not see the point of this function ...
const getArtistMerchByMerchAndArtistId = (merchId: number, artistId: number) => {
    return fetch(`${BASE_URL}/getArtistEvent/${merchId}/${artistId}`)
        .then(res => res.json())
        .catch((err => console.log(err, "error")))
}



export { createMerch, getMerch, getMerchById, getMerchByArtistId, getArtistMerchByMerchAndArtistId }
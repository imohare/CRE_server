//imports event type from DataTypes EventTypes
//gets all events and saves them to the EventContext once a minute or so
import { IArtist } from "DataTypes"


//BASEURI
const BASE_URL = 'http://localhost:3001'


//createArtist
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

//getArtists(all)
const getArtists = () => {
    return fetch(`${BASE_URL}/getArtists`)
        .then(res => res.json())
        .catch((err => console.log(err, "error")))
}


//getArtistById
const getArtistById = (artistId: number) => {
    return fetch(`${BASE_URL}/getArtist/${artistId}`)
        .then(res => res.json)
        .catch(err => console.log(err, "error"))

}


export { createArtist, getArtists, getArtistById }
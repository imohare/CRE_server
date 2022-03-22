import { IEvent } from "DataTypes/EventType"

const BASE_URL = 'http://localhost:3001';

//create Event
const createEvent = (event: IEvent) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
    }
    return fetch(BASE_URL, requestOptions)
        .then(res => res.json())
        .catch(err => console.log(err, "Error"))
}

//getEvents
const getEvents = () => {
    return fetch(`${BASE_URL}/getEvents`)
        .then(res => res.json())
        .catch((err => console.log(err, "error")))
}

//getEventById
const getEventById = (eventId: number) => {
    return fetch(`${BASE_URL}/getEvent/${eventId}`)
        .then(res => res.json())
        .catch((err => console.log(err, "error")))
}


//getEventsByArtist
const getEventsByArtistId = (artistId: number) => {
    return fetch(`${BASE_URL}/getArtistEvents/${artistId}`)
        .then(res => res.json())
        .catch((err => console.log(err, "error")))
}

//getArtistEvent --> personally do not see the point of this function ...
const getArtistEventByEventAndArtistId = (eventId: number, artistId: numbers) => {
    return fetch(`${BASE_URL}/getArtistEvent/${eventId}/${artistId}`)
        .then(res => res.json())
        .catch((err => console.log(err, "error")))
}
    
}


export { createEvent, getEvents, getEventById, getEventsByArtistId }
import { IEvent } from "../Data/DataTypes/Event"
const BASE_URL = 'http://localhost:3001';

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

const getEvents = () => {
    return fetch(`${BASE_URL}/getEvents`)
        .then(res => res.json())
        .catch((err => console.log(err, "error")))
}

const getEventById = (eventId: number) => {
    return fetch(`${BASE_URL}/getEvent/${eventId}`)
        .then(res => res.json())
        .catch((err => console.log(err, "error")))
}

const getEventsByArtistId = (artistId: number) => {
    return fetch(`${BASE_URL}/getArtistEvents/${artistId}`)
        .then(res => res.json())
        .catch((err => console.log(err, "error")))
}

const getArtistEventByEventAndArtistId = (eventId: number, artistId: number) => {
    return fetch(`${BASE_URL}/getArtistEvent/${eventId}/${artistId}`)
        .then(res => res.json())
        .catch((err => console.log(err, "error")))
}

export { createEvent, getEvents, getEventById, getEventsByArtistId, getArtistEventByEventAndArtistId }
const BASE_URL = 'http://localhost:3001';

const createEvent = (event: any) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ event })
    }

    return fetch(BASE_URL, requestOptions)
        .then(res => res.json())
        .catch(err => console.log(err, "Error"))
}

const getEvents = () => {
    return fetch(`${BASE_URL}/getEvents`)
        .then(res => res.json())
        .then(res => {
            return res.map((event: any) => ({ ...event, createdAt: new Date(event.createdAt) }))
        })
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

const deleteEvent = (eventId: number) => {
    return fetch(`${BASE_URL}/deleteEvent/${eventId}`,
        { method: "DELETE" });
}

export { createEvent, getEvents, getEventById, getEventsByArtistId, getArtistEventByEventAndArtistId, deleteEvent }
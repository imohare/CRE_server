//Event Token

import { IEventToken } from "Data/DataTypes"
const BASE_URL = 'http://localhost:3001'

//postEventToken
const postEventToken = (event: IEventToken, eventId: number, consumerId: number) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
    }
    return fetch(`${BASE_URL}/${event}/${consumerId}`, requestOptions)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

//getEventTokenById
const getEventTokenById = (tokenId: number) => {
    return fetch(`${BASE_URL}/getEventToken/${tokenId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

//getEventTokens
const getEventTokens = () => {
    return fetch(`${BASE_URL}/getEventTokens`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

//getConsumersEventTokens
const getConsumersEventTokens = (eventId: number, consumerId: number) => {
    return fetch(`${BASE_URL}/getConsumerEventTokens/${eventId}/${consumerId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

//getArtistsEventTokens
const getArtistsEventTokens = (artistId: number) => {
    return fetch(`${BASE_URL}/getArtistEventTokens/${artistId}}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

export { postEventToken, getEventTokenById, getEventTokens, getConsumersEventTokens, getArtistsEventTokens }
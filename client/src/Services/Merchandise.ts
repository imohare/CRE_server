import { IMerchandise } from "../Data/DataTypes"
const BASE_URL = 'http://localhost:3001'

const createMerchandise = (merchandise: IMerchandise, artistId: number) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            body: JSON.stringify(merchandise)
        }
    }
    return fetch(`${BASE_URL}/createMerchandise/${artistId}`, requestOptions)
        .then(res => res.json())
        .catch(err => console.log(err, "error"))
}

const getAllMerchandises = () => {
    return fetch(`${BASE_URL}/getMerchandises`)
        .then(res => res.json())
        .catch(err => console.log(err, "error"))
}

const getMerchandiseById = (merchandiseId: number) => {
    return fetch(`${BASE_URL}/getMerchandise/${merchandiseId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "error"))
}

const getAllMerchandisesbyArtistId = (artistId: number) => {
    return fetch(`${BASE_URL}/getArtistMerchandises/${artistId}`)
        .then(res => res.json)
        .catch(err => console.log(err, "error"))
}

const getMerchandisebyArtistId = (merchandiseId: number, artistId: number) => {
    return fetch(`${BASE_URL}/getArtistMerchandise/${merchandiseId}/${artistId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "error"))
}

const deleteMerchandise = (merchandiseId: number) => {
    return fetch(`${BASE_URL}/deleteMerchandise/${merchandiseId}`,
        { method: "DELETE" });
}

export { createMerchandise, getAllMerchandises, getMerchandiseById, getAllMerchandisesbyArtistId, getMerchandisebyArtistId, deleteMerchandise }


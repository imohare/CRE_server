const BASE_URL = 'http://localhost:3001'

const createMerchandise = (merch: any) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            body: JSON.stringify({
                name: name,
                type: type,
                description: description,
                number_of_tokens: number_of_tokens,
                tokens_image: tokens_image,
                tokens_value: tokens_value
            })
        }
    }
    return fetch(`${BASE_URL}/createMerchandise/${artistId}`, requestOptions)
        .then(res => res.json())
        .catch(err => console.log(err, "error"))
}

const getAllMerchandises = () => {
    return fetch(`${BASE_URL}/getMerchandises`)
        .then(res => res.json())
        .then(res => {
            return res.map((merchandise: any) => ({ ...merchandise, createdAt: new Date(merchandise.createdAt) }))
        })
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


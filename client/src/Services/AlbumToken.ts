const BASE_URL = 'http://localhost:3001'

const getAlbumTokenById = (tokenId: number) => {
    return fetch(`${BASE_URL}/getAlbumToken/${tokenId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}


const getAlbumTokenByAlbumId = (albumId: number) => {
    return fetch(`${BASE_URL}/getAlbumTokensByAlbumId/${albumId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "error"))
}

const getAlbumTokens = () => {
    return fetch(`${BASE_URL}/getAlbumTokens`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

const getConsumersAlbumTokens = (albumId: number, consumerId: number) => {
    return fetch(`${BASE_URL}/getConsumerAlbumTokens/${albumId}/${consumerId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

const getArtistsAlbumTokens = (artistId: number) => {
    return fetch(`${BASE_URL}/getArtistAlbumsTokens/${artistId}}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

const getConsumerAlbumTokensByConsumerId = (consumerId: number) => {
    return fetch(`${BASE_URL}/getConsumerAlbumTokensByConsumerId/${consumerId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

export { getAlbumTokenById, getAlbumTokens, getConsumersAlbumTokens, getArtistsAlbumTokens, getAlbumTokenByAlbumId, getConsumerAlbumTokensByConsumerId }
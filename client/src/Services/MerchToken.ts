import { IMerchToken } from "Data/DataTypes"
const BASE_URL = 'http://localhost:3001'

const postMerchToken = (merch: IMerchToken, merchId: number, consumerId: number) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(merch)
    }
    return fetch(`${BASE_URL}/${merchId}/${consumerId}`, requestOptions)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

const getMerchTokenById = (tokenId: number) => {
    return fetch(`${BASE_URL}/getMerchToken/${tokenId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

const getConsumerMerchTokensByConsumerId = (consumerId: number) => {
    return fetch(`${BASE_URL}/getMerchToken/${tokenId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

const getMerchTokens = () => {
    return fetch(`${BASE_URL}/getMerchTokens`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

const getConsumersMerchTokensByConsumerId = (merchId: number, consumerId: number) => {
    return fetch(`${BASE_URL}/getConsumerMerchTokensByConsumerId/${merchId}/${consumerId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

const getArtistsMerchTokens = (artistId: number) => {
    return fetch(`${BASE_URL}/getArtistMerchTokens/${artistId}}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

export { postMerchToken, getMerchTokenById, getMerchTokens, getConsumersMerchTokensByConsumerId, getArtistsMerchTokens, getConsumerMerchTokensByConsumerId }
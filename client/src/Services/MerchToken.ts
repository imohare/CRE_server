const BASE_URL = 'http://localhost:3001'

const getMerchTokenById = (tokenId: number) => {
    return fetch(`${BASE_URL}/getMerchToken/${tokenId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

const getMerchTokens = () => {
    return fetch(`${BASE_URL}/getMerchTokens`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

const getConsumersMerchTokens = (merchId: number, consumerId: number) => {
    return fetch(`${BASE_URL}/getConsumerMerchTokens/${merchId}/${consumerId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

const getMerchTokensByMerchId = (merchId: number) => {
   return fetch(`${BASE_URL}/getMerchTokensByMerchId/${merchId}`)
        .then(res => res.json())
        .catch(err => console.log(err, "error"))
}

const getArtistsMerchTokens = (artistId: number) => {
    return fetch(`${BASE_URL}/getArtistMerchTokens/${artistId}}`)
        .then(res => res.json())
        .catch(err => console.log(err, "errors"))
}

export { getMerchTokenById, getMerchTokens, getConsumersMerchTokens, getArtistsMerchTokens, getMerchTokensByMerchId }
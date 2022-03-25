const BASE_URL = 'http://localhost:3001'

const albumTokenPurchase =  (consumerId: number, albumTokenId: number, artistId: number, albumId: number) => {
  return fetch(`${BASE_URL}/albumTokenPurchase/${artistId}/${consumerId}/${albumTokenId}/${albumId}`, 
    {method: "PATCH"})
    .then(res => res.json())
    .catch(err => console.log(err, "error"))
  };

const eventTokenPurchase =  (consumerId: number, eventTokenId: number, artistId: number, eventId: number) => {
  return fetch(`${BASE_URL}/eventTokenPurchase/${artistId}/${consumerId}/${eventTokenId}/${eventId}`, 
    {method: "PATCH"})
    .then(res => res.json())
    .catch(err => console.log(err, "error"))
  };

  const merchandiseTokenPurchase =  (consumerId: number, merchandiseTokenId: number, artistId: number, merchandiseId: number) => {
  return fetch(`${BASE_URL}/merchandiseTokenPurchase/${artistId}/${consumerId}/${merchandiseTokenId}/${merchandiseId}`, 
    {method: "PATCH"})
    .then(res => res.json())
    .catch(err => console.log(err, "error"))
  };

  export {albumTokenPurchase, eventTokenPurchase, merchandiseTokenPurchase}

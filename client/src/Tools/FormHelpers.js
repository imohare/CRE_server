import { createArtist, getArtistByEthAddress } from 'Services/Artist'
import { createConsumer, getConsumerByEthAddress } from 'Services/Consumer'
import '../Services/Consumer'


//get eth address from metamask
const getEthAddress = () => {
  if (window.ethereum) {
    return window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(eth => {
        return eth[0]
      })
  } else {
    return `Please install metamask`
  }
}


const registerWithEthAddress = async (isArtist, info) => {
  const eth = await getEthAddress();
  let result;
  if (isArtist) result = await createArtist({ eth_address: eth, ...info });
  if (!isArtist) result = await createConsumer({ eth_address: eth, ...info });
  console.log(result);
  return result;
}

//input param (boolean) which indicates whether user is artist or consumer
//then checks in the corresponding DB to see if user already exists(GET)
const checkIfInDB = async (isArtist) => {
  const eth = await getEthAddress();
  console.log(eth);
  let result;
  if (isArtist) {
    result = await getArtistByEthAddress(eth)
    if (!result) return null//if this does not work put in try/catch
    if (result) return result
  }
  if (!isArtist) {
    result = await getConsumerByEthAddress(eth)
    if (!result) return null
    if (result) return result
  }
  //result should be truthy or falsy
  return result;
}



export { getEthAddress, checkIfInDB, registerWithEthAddress }
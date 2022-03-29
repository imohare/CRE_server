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
  console.log("result making sure it is not yet in db: or if proper ressult is in db", result);
  return result;
}

//input param (boolean) which indicates whether user is artist or consumer
//then checks in the corresponding DB to see if user already exists(GET)
const checkIfInDB = async (isArtist) => {
  console.log("is artist", isArtist)
  const eth = await getEthAddress();

  let result;
  
  if (isArtist) {
    result = await getArtistByEthAddress(eth)
    //the result that it is returning is a function...
    if (result) return result
    if (!result) return null//if this does not work put in try/catch
  }
  else {
    console.log(eth);
    result = await getConsumerByEthAddress(eth)

    if (result) return result
    if (!result) return null
  }
  //result should be truthy or falsy
  //return result;
}



export { getEthAddress, checkIfInDB, registerWithEthAddress }
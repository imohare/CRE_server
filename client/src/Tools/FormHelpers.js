import { createArtist, getArtistByEthAddress } from 'Services/Artist'
import { createConsumer, getConsumerByEthAddress } from 'Services/Consumer'
import '../Services/Consumer'



const getEthAddress = () => {
  if (window.ethereum) {
    return window.ethereum.request({method: 'eth_requestAccounts'})
      .then(eth => {
      return eth[0]
    })
  } else {
    return 
  }
}

const registerWithEthAddress = async (isArtist, info) => {
  const eth = await getEthAddress();
  let result;
  if (isArtist)  result = await createArtist({ eth_address: eth, ...info });
  if (!isArtist) result = await createConsumer({ eth_address: eth, ...info });
  return result;
}

const checkIfInDB = async (isArtist) => {
  const eth = await getEthAddress();
  let result;
  if (isArtist) result = await getArtistByEthAddress(eth)
  if (!isArtist) result = await getConsumerByEthAddress(eth)
  //result should be truthy or falsy
  return result;
}



export { getEthAddress, checkIfInDB, registerWithEthAddress}
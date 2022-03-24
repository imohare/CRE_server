import { createArtist, getArtistByEthAddress } from 'Services/Artist'
import { createConsumer, getConsumerByEthAddress } from 'Services/Consumer'
import '../Services/Consumer'



const getEthAddress = () => {
  if (window.ethereum) {
    return window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(eth => {
        return eth[0]
      })
  } else {
    return
  }
}

const registerWithEthAddress = async (userT, info) => {
  const eth = await getEthAddress();

  let result;
  if (userT) result = await createArtist({ eth_address: eth, ...info });
  if (!userT) result = await createConsumer({ eth_address: eth, ...info });
  return result;
}

const checkIfInDB = async (user) => {
  const eth = await getEthAddress();
  let result;
  if (user) result = await getArtistByEthAddress(eth)
  if (!user) result = await getConsumerByEthAddress(eth)
  //result should be truthy or falsy
  return result;
}

export { getEthAddress, checkIfInDB, registerWithEthAddress }
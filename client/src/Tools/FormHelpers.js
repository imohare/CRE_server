import { createArtist, getArtistByEthAddress } from 'Services/Artist'
import { createConsumer, getConsumerByEthAddress } from 'Services/Consumer'
import '../Services/Consumer'


// const asyncCheckIfDB = async (eth) => {
//   if (user === false) {
//     const entry = await getConsumerByEthAddress(eth);
//     if (entry) {
//       return user;
//   }
//   else {
//       console.log('eth address not in DB')
//       user = await postUserC(eth);
//       user = user.json();
//       return user;
//   }
//   }
// }



const getEthAddress = () => {
  if (window.ethereum) {
    return window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(eth => {
        return eth[0]
      })
  } else {
    console.log('no eth address found')
  }
}

const registerWithEthAddress = async (userT, info) => {
  const eth = await getEthAddress();
  if (userT) createArtist({ ...eth, ...info });
  if (!userT) createConsumer({ ...eth, ...info });
}

//////////////////////////////
const checkIfInDB = async (artistBoolean) => {
  const eth = await getEthAddress();
  let result;
  if (artistBoolean) result = await getArtistByEthAddress(eth)
  if (!artistBoolean) result = await getConsumerByEthAddress(eth)
  return result;
}



///////////////////////////////



export { getEthAddress, checkIfInDB, registerWithEthAddress }
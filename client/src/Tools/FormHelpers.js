
const loginWithEthAddress = () => {
try {
  if (window.ethereum) {
    //metamask is here
    window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(result => {
        setEthAddress(result[0]);
        return result[0]
      })
      .then((eth) => {
        return asyncCheckIfDB(eth);
      })
      .then((user) => {
        return getNFTSC(user.eth_address);
      }
      )
      .then((NFTObject) => {
        //console.log(NFTObject.nft_groups, "nftList from .then")
        console.log(NFTObject.nft_groups);
        setNftCollection(NFTObject.nft_groups);
        navigate('./dashboard', { state: NFTObject.nft_groups })


      })

  } else {
    console.log("install metamask")
  }
}
  catch (err) {
    console.log(err, "error")
  }
}

export { loginWithEthAddress }
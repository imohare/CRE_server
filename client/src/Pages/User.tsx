//react
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from 'Data/UserContext';
import { getConsumerById } from '../Services/Consumer'
import ScrollList from 'Components/ReuseableComponents/ScrollList';
import { getConsumerMerchTokensByConsumerId } from '../Services/MerchToken'
import { getConsumerAlbumTokensByConsumerId } from '../Services/AlbumToken'
import { getConsumerEventTokensByConsumerId } from '../Services/EventToken'
import { IAlbumToken, IMerchToken, IEventToken } from 'Data/DataTypes';
import { ScrollList }
import { CardTemplate } from '../Components/ReuseableComponents/CardTemplate'




//eventNFTsByUserId, AlbumNFTsByUserId,MervhNFTsByUserId --> by Id
//UserdatabyID


const UserPage: React.FunctionComponent = () => {
  const { userType, currentId, setCurrentId } = useContext(UserContext);


  //if artist, display with additional update authorisation
  const [user, setUser] = React.useState({});
  const [eventNFTs, setEventNFTs] = ();
  const [merchNFTs, setMerchNFTs] = ();
  const [albumNFTs, setAlbumNFTs] = ();


  React.useEffect(() => {
    const userData = await getConsumerById(currentId);//enter user id here
    setUser(userData);

    const eventTokens = await getConsumerEventTokensByConsumerId(currentId);
    setEventNFTs(eventTokens);

    const albumTokens = getConsumerAlbumTokensByConsumerId(currentId);
    setAlbumNFTs(albumTokens);

    const merchNFTs = await getConsumerMerchTokensByConsumerId(currentId)
    setEventNFTs(merchNFTs);
  }, [])




  return (
    <>
      <div>
        <Link to="/">home</Link>
        <h1>User</h1>

        <div className="nftHalf">
          <div className="eventNFTs"> Your Event NFTs:
            <ScrollList >{eventNFTs.map(
              (eventNft: IEventToken) => { return <CardTemplate event={eventNft} key={eventNft.id} /> })
            }</ScrollList>
            {/* <NFTList /> */}
          </div>
          <div className="albumNFTs"> Your Album NFTs: </div>
          <ScrollList >{albumNFTs.map(
            (albumNFT: IEventToken) => { return <CardTemplate event={albumNFT} key={albumNFT.id} /> })
          }</ScrollList>
          <div className="merchNFTs"> Your Merch NFTs: </div>
          <ScrollList >{merchNFTs.map(
            (merchNFT: IEventToken) => { return <CardTemplate event={merchNFT} key={merchNFT.id} /> })
          }</ScrollList>
        </div>

        <div className="personalInfoHalf">
          <div className="profilePic"></div>
          <div className="userInfo">
            {/* <div>{user.username}</div>
          <div>{user.location}</div>
          <div>{user.points} </div> */}
          </div>
        </div>
      </div>

    </>)
}

export default UserPage;

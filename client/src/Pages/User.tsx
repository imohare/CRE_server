//react
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { UserContext } from 'Data/UserContext';
import { getConsumerById } from '../Services/Consumer'
import { useContext } from 'react';



//eventNFTsByUserId, AlbumNFTsByUserId,MervhNFTsByUserId --> by Id
//UserdatabyID


const UserPage: React.FunctionComponent = () => {
  //if artist, display with additional update authorisation
  // const id = 

  // const asyncGetUserInfo = async () => {
  //   let user = await getConsumerById()//enter user id here
  // }
  const location = useLocation();
  console.log(location)
  const { currentId } = useContext(UserContext);

  // useEffect(() => {
  //   //get conssumerbyid

  //   const _consumer = getConsumerById(currentId);


  //   // events
  //   const _events =


  //   //albums

  //   //nfts
  // }, [])



  return (
    <>
      <Link to="/">home</Link>
      <h1>User</h1>
      <p>only user can look at their own profile</p>
    </>)
}

export default UserPage;

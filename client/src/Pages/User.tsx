//react
import { Link } from 'react-router-dom';
import { UserContext } from 'Data/UserContext';
import { getConsumerById } from '../Services/Consumer'



//eventNFTsByUserId, AlbumNFTsByUserId,MervhNFTsByUserId --> by Id
//UserdatabyID


const UserPage: React.FunctionComponent = () => {
  //if artist, display with additional update authorisation
  // const id = 

  // const asyncGetUserInfo = async () => {
  //   let user = await getConsumerById()//enter user id here
  // }


  return (
    <>
      <Link to="/">home</Link>
      <h1>User</h1>
      <p>only user can look at their own profile</p>
    </>)
}

export default UserPage;

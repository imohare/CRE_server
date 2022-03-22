//react
import { Link } from 'react-router-dom';
//components
//styling

const UserPage: React.FunctionComponent = () => {
//if artist, display with additional update authorisation

  return (
    <>
    <Link to="/">home</Link>
    <h1>User</h1>
    <p>only user can look at their own profile</p>
  </>)
}

export default UserPage;
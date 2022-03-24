//react
import { Link } from 'react-router-dom';
//components
//styling

const ArtistPage: React.FunctionComponent = () => {
  //if artist, display with additional update authorisation

  return (
    <>
      <Link to="/">home</Link>
      <h1>Usesr view of Artist Page</h1>



      <Link to="/event">specific event</Link>
    </>)
}

export default ArtistPage;
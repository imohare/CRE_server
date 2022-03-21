//react
import { Link } from 'react-router-dom';
//components
//styling

const ArtistPage: React.FunctionComponent = () => {
//if artist, display with additional update authorisation

  return (
    <>
    <Link to="/">home</Link>
    <h1>Artist</h1>
    <p>artist view with option to update offers</p>
    <p>user view without any authorisations but with fake follow button</p>
    <Link to="/event">specific event</Link>
  </>)
}

export default ArtistPage;
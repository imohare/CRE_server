import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { UserContext } from 'Data/UserContext';




const ArtistPage: React.FunctionComponent = () => {
//if artist, display with additional update authorisation

  return (
    <>
    <Link to="/">home</Link>
    <h1>Artist</h1>
    <div>
      { useContext === artist ?<p>is artist</p> : <p>is not artist</p> }
    </div>
    <p>artist view with option to update offers</p>
    <p>user view without any authorisations but with fake follow button</p>
    <Link to="/event">specific event</Link>
  </>)
}

export default ArtistPage;
import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router';

import { FormContext } from '../../../Data/FormConfigs/FormContext';
import { getArtistById } from '../../../Services/Artist';
import { getAllAlbumsOfArtist } from '../../../Services/Album';
import { getEventsByArtistId } from '../../../Services/Event';

const ArtistModal = () => {
const {artistId} = useParams();
const [artist, setArtist] = useState('');
const [artistAlbums, setArtistAlbums] = useState([]);
const [artistEvents, setAristEvents] = useState([]);


  return ({

  }

  )
}

export default ArtistModal

export { }
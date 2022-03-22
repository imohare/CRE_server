import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router';

import { FormContext } from '../../../Data/FormConfigs/FormContext';
import { getArtistById } from '../../../Services/Artist';
import { getAllAlbumsbyArtistId } from '../../../Services/Album';
import { getEventsByArtistId } from '../../../Services/Event';
import { getMerchandisebyArtistId } from 'Services/Merchandise';

const ArtistModal = () => {
const {artistId} = useParams();
const [artist, setArtist] = useState('');
const [artistAlbums, setArtistAlbums] = useState([]);
const [artistEvents, setAristEvents] = useState([]);
const [artistMerchandise, setArtistMerchandise] = useState([]);


  return ({

  }

  )
}

export default ArtistModal

export { }
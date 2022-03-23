// import { useState, useContext, useEffect } from 'react';
// import { useParams } from 'react-router';

// import { FormContext } from '../../../Data/FormConfigs/FormContext';
// import { getArtistById } from '../../../Services/Artist';
// import { getAllAlbumsbyArtistId } from '../../../Services/Album';
// import { getEventsByArtistId } from '../../../Services/Event';
// import { getAllMerchandisesbyArtistId } from 'Services/Merchandise';
// import { response } from 'express';

// const ArtistModal = () => {
// const {artistId} = useParams();
// const [artist, setArtist] = useState('');
// const [artistAlbums, setArtistAlbums] = useState([]);
// const [artistEvents, setArtistEvents] = useState([]);
// const [artistMerchandise, setArtistMerchandise] = useState([]);

// useEffect(() => {
//   getArtistById(artistId)
//   .then(response => {
//     setArtist(response)
//   })

//   getAllAlbumsbyArtistId(artistId)
//   .then(response => {
//   setArtistAlbums(response)
// })

//   getEventsByArtistId(artistId)
//   .then(response => {
//     setArtistEvents(response)
//   })

//   getAllMerchandisesbyArtistId(artistId)
//   .then(response => {
//     setArtistMerchandise(response)
//   })

// })
//   .catch( error => {
//     console.log(error)
//     console.log("Error occured.")
//   })
// }, [])


//   return ({

//   }

//   )
// }

// export default ArtistModal

export { }
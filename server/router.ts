import express from 'express';
const router = express.Router();

const { createArtist, getArtist, getArtists } = require('./controllers/artist.ts');
const { createAlbum, getAlbum, getAlbums, getArtistAlbums } = require('./controllers/album.ts');
const { createEvent, getEvent, getEvents, getArtistEvents } = require('./controllers/event.ts')
const { createMerchandise, getMerchandises, getMerchandise, getArtistMerchandises } = require('./controllers/merchandise.ts');

//Artist
router.post('/createArtist', createArtist);
router.get('/getArtists', getArtists);
router.get('/getArtist/:artistId', getArtist);
//Album
router.post('/createAlbum/:artistId', createAlbum);
router.get('/getAlbums', getAlbums);
router.get('/getAlbum/:albumId', getAlbum);
router.get('/getArtistAlbums/:artistId', getArtistAlbums);
//Merchandise
router.post('/createMerchandise/:artistId', createMerchandise);
router.get('/getMerchandises', getMerchandises);
router.get('/getMerchandise/:merchandiseId', getMerchandise);
router.get('/getArtistMerchandises/:artistId', getArtistMerchandises);

//Event
router.post('/createEvent/:artistId', createEvent);
router.get('/getEvents', getEvents);
router.get('/getEvent/:eventId', getEvent);
router.get('/getArtistEvents/:artistId', getArtistEvents);


export { router };
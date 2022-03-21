import express from 'express';
const router = express.Router();

const { createArtist } = require('./controllers/artist.ts');
const { createAlbum, getAlbum, getAlbums } = require('./controllers/album.ts');
const { createEvent, getEvent, getEvents } = require('./controllers/event.ts')
const { createMerchandise, getMerchandises, getMerchandise } = require('./controllers/merchandise.ts');

//Artist
router.post('/createArtist', createArtist);
//Album
router.post('/createAlbum/:artistId', createAlbum);
router.get('/getAlbums', getAlbums);
router.get('/getAlbum/:albumId', getAlbum);
router.post('/createMerchandise/:artistId', createMerchandise);
router.get('/getMerchandises', getMerchandises);
router.get('/getMerchandise/:merchandiseId', getMerchandise);
//Event
router.post('/createEvent/:artistId', createEvent);
router.get('/getEvents', getEvents);
router.get('/getEvent/:eventId', getEvent);

export { router };
import express from 'express';
const router = express.Router();
const { createArtist } = require('./controllers/artist.ts')
console.log('in router');
const { createAlbum } = require('./controllers/album.ts')
const { createEvent, getEvent, getEvents } = require('./controllers/event.ts')

//Album
router.post('/createAlbum/:artistId', createAlbum);


//Artist
router.post('/createArtist', createArtist);

//Event
router.post('/createEvent/:artistId', createEvent);
router.get('/getEvents', getEvents);
router.get('/getEvent/:eventId', getEvent);

export { router };
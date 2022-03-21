import express from 'express';
const router = express.Router();

const { createArtist, getArtist, getArtists } = require('./controllers/artist.ts');
const { createAlbum, getAlbum, getAlbums, getArtistAlbums, getArtistAlbum } = require('./controllers/album.ts');
const { createEvent, getEvent, getEvents, getArtistEvents, getArtistEvent } = require('./controllers/event.ts')
const { createMerchandise, getMerchandises, getMerchandise, getArtistMerchandises, getArtistMerchandise } = require('./controllers/merchandise.ts');
const { createConsumer, getConsumer } = require('./controllers/consumer.ts');
const { createAlbumToken, getAlbumToken, getAlbumTokens } = require('./controllers/albumToken.ts');
const { createMerchandiseToken, getMerchandiseToken, getMerchandiseTokens } = require('./controllers/merchandiseToken.ts');
const { createEventToken, getEventToken, getEventTokens } = require('./controllers/EventToken.ts');

// Artist
router.post('/createArtist', createArtist);
router.get('/getArtists', getArtists);
router.get('/getArtist/:artistId', getArtist);

// Album
router.post('/createAlbum/:artistId', createAlbum);
router.get('/getAlbums', getAlbums);
router.get('/getAlbum/:albumId', getAlbum);
router.get('/getArtistAlbums/:artistId', getArtistAlbums);
router.get('/getArtistAlbum/:albumId/:artistId', getArtistAlbum);

// Consumer 
router.post('/createConsumer', createConsumer);
router.get('/getConsumer/:consumerId', getConsumer);

// Event
router.post('/createEvent/:artistId', createEvent);
router.get('/getEvents', getEvents);
router.get('/getEvent/:eventId', getEvent);
router.get('/getArtistEvents/:artistId', getArtistEvents);
router.get('/getArtistEvent/:eventId/:artistId', getArtistEvent);

// Merchandise
router.post('/createMerchandise/:artistId', createMerchandise);
router.get('/getMerchandises', getMerchandises);
router.get('/getMerchandise/:merchandiseId', getMerchandise);
router.get('/getArtistMerchandises/:artistId', getArtistMerchandises);
router.get('/getArtistMerchandise/:merchandiseId/:artistId', getArtistMerchandise);

// Album Token 
router.post('/createAlbumToken/:albumId', createAlbumToken);
router.get('/getAlbumToken/:tokenId', getAlbumToken);
router.get('/getAlbumTokens', getAlbumTokens);

// Merchandise Token 
router.post('/createMerchandiseToken/:merchandiseId', createMerchandiseToken);
router.get('/getMerchandiseToken/:tokenId', getMerchandiseToken);
router.get('/getMerchandiseTokens', getMerchandiseTokens);

// Event Token 
router.post('/createEventToken/:eventId', createEventToken);
router.get('/getEventToken/:tokenId', getEventToken);
router.get('/getEventTokens', getEventTokens);



export { router };
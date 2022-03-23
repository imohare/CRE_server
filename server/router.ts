import express from 'express';
const router = express.Router();

const { createArtist, getArtistById, getArtistByName, getArtists, deleteArtist } = require('./controllers/artist.ts');

const { createAlbum, getAlbum, getAlbums, getArtistAlbums, getArtistAlbum, deleteAlbum } = require('./controllers/album.ts');

const { createEvent, getEvent, getEvents, getArtistEvents, getArtistEvent, deleteEvent } = require('./controllers/event.ts')

const { createMerchandise, getMerchandises, getMerchandise, getArtistMerchandises, getArtistMerchandise, deleteMerchandise } = require('./controllers/merchandise.ts');

const { createConsumer, getConsumerById, getConsumerByUsername, deleteConsumer } = require('./controllers/consumer.ts');

const { createAlbumToken, getAlbumToken, getAlbumTokens, getConsumerAlbumTokens, getArtistAlbumsTokens } = require('./controllers/albumToken.ts');

const { createMerchandiseToken, getMerchandiseToken, getMerchandiseTokens, getConsumerMerchandiseTokens, getArtistMerchandisesTokens, getConsumerMerchTokensByConsumerId } = require('./controllers/merchandiseToken.ts');

const { createEventToken, getEventToken, getEventTokens, getConsumerEventTokens, getArtistEventsTokens } = require('./controllers/EventToken.ts');

const { albumTokenPurchase, eventTokenPurchase, merchandiseTokenPurchase } = require('./controllers/purchasing.ts');

// Artist
router.post('/createArtist', createArtist);
router.get('/getArtists', getArtists);
router.get('/getArtistById/:artistId', getArtistById);
router.get('/getArtistByName/:artistName', getArtistByName);
router.delete('/deleteArtist/:artistId', deleteArtist);

// Album
router.post('/createAlbum/:artistId', createAlbum);
router.get('/getAlbums', getAlbums);
router.get('/getAlbum/:albumId', getAlbum);
router.get('/getArtistAlbums/:artistId', getArtistAlbums);
router.get('/getArtistAlbum/:albumId/:artistId', getArtistAlbum);
router.delete('/deleteAlbum/:albumId', deleteAlbum);

// Consumer 
router.post('/createConsumer', createConsumer);
router.get('/getConsumerById/:consumerId', getConsumerById);
router.get('/getConsumerByUsername/:consumerUsername', getConsumerByUsername);
router.delete('/deleteConsumer/:consumerId', deleteConsumer);

// Event
router.post('/createEvent/:artistId', createEvent);
router.get('/getEvents', getEvents);
router.get('/getEvent/:eventId', getEvent);
router.get('/getArtistEvents/:artistId', getArtistEvents);
router.get('/getArtistEvent/:eventId/:artistId', getArtistEvent);
router.delete('/deleteEvent/:eventId', deleteEvent);

// Merchandise
router.post('/createMerchandise/:artistId', createMerchandise);
router.get('/getMerchandises', getMerchandises);
router.get('/getMerchandise/:merchandiseId', getMerchandise);
router.get('/getArtistMerchandises/:artistId', getArtistMerchandises);
router.get('/getArtistMerchandise/:merchandiseId/:artistId', getArtistMerchandise);
router.delete('/deleteMerchandise/:merchandiseId', deleteMerchandise);

// Album Token 
router.post('/createAlbumToken/:artistId/:albumId', createAlbumToken);
router.get('/getAlbumToken/:tokenId', getAlbumToken);
router.get('/getAlbumTokens', getAlbumTokens);
router.get('/getConsumerAlbumTokens/:albumId/:consumerId', getConsumerAlbumTokens);
router.get('/getArtistAlbumsTokens/:artistId', getArtistAlbumsTokens);

// Merchandise Token 
router.post('/createMerchandiseToken/:artistId/:merchandiseId', createMerchandiseToken);
router.get('/getMerchandiseToken/:tokenId', getMerchandiseToken);
router.get('/getMerchandiseTokens', getMerchandiseTokens);
router.get('/getConsumerMerchandiseTokens/:merchandiseId/:consumerId', getConsumerMerchandiseTokens);
router.get('/getArtistMerchandisesTokens/:artistId', getArtistMerchandisesTokens);
router.get('/getConsumerMerchTokensByConsumerId/:consumerId', getConsumerMerchTokensByConsumerId);

// Event Token 
router.post('/createEventToken/:artistId/:eventId', createEventToken);
router.get('/getEventToken/:tokenId', getEventToken);
router.get('/getEventTokens', getEventTokens);
router.get('/getConsumerEventTokens/:eventId/:consumerId', getConsumerEventTokens);
router.get('/getArtistEventsTokens/:artistId', getArtistEventsTokens);

// Purchasing
router.patch('/albumTokenPurchase/:artistId/:consumerId/:albumTokenId', albumTokenPurchase);
router.patch('/eventTokenPurchase/:artistId/:consumerId/:eventTokenId', eventTokenPurchase);
router.patch('/merchandiseTokenPurchase/:artistId/:consumerId/:merchandiseTokenId', merchandiseTokenPurchase);

export { router };
import express from 'express';
const router = express.Router();

const { createArtist, getArtistById, getArtistByName, getArtists, deleteArtist, getArtistByEthAddress } = require('./controllers/artist.ts');

const { createAlbum, getAlbum, getAlbums, getArtistAlbums, getArtistAlbum, deleteAlbum } = require('./controllers/album.ts');

const { createEvent, getEvent, getEvents, getArtistEvents, getArtistEvent, deleteEvent } = require('./controllers/event.ts')

const { createMerchandise, getMerchandises, getMerchandise, getArtistMerchandises, getArtistMerchandise, deleteMerchandise } = require('./controllers/merchandise.ts');

const { createConsumer, getConsumerById, getConsumerByUsername, deleteConsumer, getConsumerByEthAddress } = require('./controllers/consumer.ts');

const { getAlbumToken, getAlbumTokens, getConsumerAlbumTokens, getArtistAlbumsTokens, getConsumerAlbumTokensByConsumerId, getAlbumTokenByAlbumId } = require('./controllers/albumToken.ts');

const { getMerchandiseToken, getMerchandiseTokens, getConsumerMerchandiseTokens, getArtistMerchandisesTokens, getConsumerMerchTokensByConsumerId } = require('./controllers/merchandiseToken.ts');

const { getEventToken, getEventTokens, getConsumerEventTokens, getArtistEventsTokens, getConsumerEventTokensByConsumerId, getEventTokenByEventId } = require('./controllers/EventToken.ts');

const { albumTokenPurchase, eventTokenPurchase, merchandiseTokenPurchase } = require('./controllers/purchasing.ts');

// Artist
router.post('/createArtist', createArtist); //works
router.get('/getArtists', getArtists); //works
router.get('/getArtistByEthAddress/:eth_address', getArtistByEthAddress) //works
router.get('/getArtistById/:artistId', getArtistById); //works
router.get('/getArtistByName/:artistName', getArtistByName); // doesn't work
router.delete('/deleteArtist/:artistId', deleteArtist); // works

// Album
router.post('/createAlbum/:artistId', createAlbum); // works
router.get('/getAlbums', getAlbums);
router.get('/getAlbum/:albumId', getAlbum);
router.get('/getArtistAlbums/:artistId', getArtistAlbums);
router.get('/getArtistAlbum/:albumId/:artistId', getArtistAlbum);
router.delete('/deleteAlbum/:albumId', deleteAlbum);

// Consumer 
router.post('/createConsumer', createConsumer);
router.get('/getConsumerByEthAddress/:eth_address', getConsumerByEthAddress)
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
router.get('/getAlbumToken/:tokenId', getAlbumToken);
router.get('/getAlbumTokens', getAlbumTokens);
router.get('/getConsumerAlbumTokens/:albumId/:consumerId', getConsumerAlbumTokens);
router.get('/getArtistAlbumsTokens/:artistId', getArtistAlbumsTokens);
router.get('/getConsumerAlbumTokensByConsumerId/:consumerId', getConsumerAlbumTokensByConsumerId);
router.get('/getAlbumTokenByAlbumId/:albumId', getAlbumTokenByAlbumId)

// Merchandise Token 
router.get('/getMerchandiseToken/:tokenId', getMerchandiseToken);
router.get('/getMerchandiseTokens', getMerchandiseTokens);
router.get('/getConsumerMerchandiseTokens/:merchandiseId/:consumerId', getConsumerMerchandiseTokens);
router.get('/getArtistMerchandisesTokens/:artistId', getArtistMerchandisesTokens);
router.get('/getConsumerMerchTokensByConsumerId/:consumerId', getConsumerMerchTokensByConsumerId);

// Event Token 
router.get('/getEventToken/:tokenId', getEventToken);
router.get('/getEventTokens', getEventTokens);
router.get('/getConsumerEventTokens/:eventId/:consumerId', getConsumerEventTokens);
router.get('/getArtistEventsTokens/:artistId', getArtistEventsTokens);
router.get('/getConsumerEventTokensByConsumerId/:consumerId', getConsumerEventTokensByConsumerId)
router.get('/getEventTokenByEventId/:eventId', getEventTokenByEventId)


// Purchasing
router.patch('/albumTokenPurchase/:artistId/:consumerId/:albumTokenId/:albumId', albumTokenPurchase);
router.patch('/eventTokenPurchase/:artistId/:consumerId/:eventTokenId/:eventId', eventTokenPurchase);
router.patch('/merchandiseTokenPurchase/:artistId/:consumerId/:merchandiseTokenId/:eventId', merchandiseTokenPurchase);

export { router };
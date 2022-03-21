import express from 'express';
const router = express.Router();
const { createArtist } = require('./controllers/artist.ts');
const { createAlbum } = require('./controllers/album.ts');
const { createMerchandise, getMerchandises, getMerchandise } = require('./controllers/merchandise.ts');



router.post('/createArtist', createArtist);
router.post('/createAlbum/:artistId', createAlbum);
router.post('/createMerchandise/:artistId', createMerchandise);
router.get('/getMerchandises', getMerchandises);
router.get('/getMerchandise/:merchandiseId', getMerchandise);

export { router };
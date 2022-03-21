import express from 'express';
import { getMerchandise } from './controllers/merchandise';
const router = express.Router();
const { createArtist } = require('./controllers/artist.ts');
const { createAlbum } = require('./controllers/album.ts');
const { createMerchandise, getMerchandises } = require('./controllers/merchandise.ts');



router.post('/createArtist', createArtist);
router.post('/createAlbum/:artistId', createAlbum);
router.post('/createMerchandise/:artistId', createMerchandise);
router.get('/getMerchandises', getMerchandises);
export { router };
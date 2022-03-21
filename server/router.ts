import express from 'express';
const router = express.Router();
const { createArtist } = require('./controllers/artist.ts')
console.log('in router');
const { createAlbum } = require('./controllers/album.ts')


router.post('/createArtist', createArtist);
router.post('/createAlbum/:artistId', createAlbum);

export { router };
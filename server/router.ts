import express from 'express';
const router = express.Router();
const { createArtist } = require('./controllers/artist.ts')

router.post('/createArtist', createArtist);

export { router };
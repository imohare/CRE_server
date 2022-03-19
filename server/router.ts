import express from 'express';
const router = express.Router();
const { createArtist } = require('./controller/artist.ts')

router.post('/createArtist', createArtist);

export { router };
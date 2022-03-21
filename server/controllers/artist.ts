import { Request, Response } from 'express';
import { Artist } from "../models";

async function createArtist(req: Request, res: Response) {
  const _artist = await Artist.create({
    eth_address: req.body.eth_address,
    username: req.body.username,
    website: req.body.username,
    instagram: req.body.instagram,
    twitter: req.body.twitter,
    discord: req.body.discord,
    spotify: req.body.spotify,
  })
  res.send(_artist);
}

async function getArtist(req: Request, res: Response) {
  try {
    const _artist = await Artist.findByPk(req.params.artistId);
    res.json(_artist);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
 }

async function getArtists(req: Request, res: Response) {
  try {
    const _artists = await Artist.findAll();
    res.json(_artists);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

export { createArtist, getArtist, getArtists };

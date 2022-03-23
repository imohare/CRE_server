import { Request, Response } from 'express';
import { Album, AlbumToken, Artist, Event, EventToken, Merchandise, MerchandiseToken, Points } from "../models";

async function createArtist(req: Request, res: Response) {
  const _artist = await Artist.create({
    eth_address: req.body.eth_address,
    name: req.body.name,
    profile_picture: req.body.profile_picture,
    website: req.body.username,
    instagram: req.body.instagram,
    twitter: req.body.twitter,
    discord: req.body.discord,
    spotify: req.body.spotify,
  })
  res.send(_artist);
}

async function getArtistById(req: Request, res: Response) {
  try {
    const _artist = await Artist.findByPk(req.params.artistId);
    res.status(200);
    res.json(_artist);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
 }

 async function getArtistByName(req: Request, res: Response) {
  try {
    const _artists = await Artist.findAll({where:{name: req.body.name}});
    res.status(200);
    res.json(_artists);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
 }

async function getArtists(req: Request, res: Response) {
  try {
    const _artists = await Artist.findAll();
    res.status(200);
    res.json(_artists);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function deleteArtist(req: Request, res: Response) {
  const artistId = req.params.artistId;
  await AlbumToken.destroy({where: {ArtistId: artistId}});
  await MerchandiseToken.destroy({where: {ArtistId: artistId}});
  await EventToken.destroy({where: {ArtistId: artistId}});
  await Album.destroy({where: {ArtistId: artistId}});
  await Event.destroy({where: {ArtistId: artistId}});
  await Merchandise.destroy({where: {ArtistId: artistId}});
  await Points.destroy({where: {ArtistId: artistId}});
  await Artist.destroy({where: {id: artistId}});
  res.status(201);
  res.json();  
}

export { createArtist, getArtistById, getArtists, deleteArtist, getArtistByName };

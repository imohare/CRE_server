import { Request, Response } from 'express';
import { Album, Artist } from "../models";

async function getAlbums(req: Request, res: Response) {
  try {
    const _albums: Album[] = await Album.findAll();
    res.json(_albums);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function getAlbum(req: Request, res: Response) {
  try {
    const _album = await Album.findByPk(req.params.albumId);
    res.json(_album);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function createAlbum(req: Request, res: Response) {
  try {
    if (!req.params.artistId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const artistId = req.params.artistId;
      const artist = await Artist.findByPk(artistId);

      if (!artist) {
        res.status(400);
        res.json('Artist not found');
      } else {
        const _album = await Album.create(req.body);

        _album
          .setArtist(artist)
          .then((_album) => {
            res.json(_album);
            res.status(201);
          })

          .catch((err) => {
            res.json('Database Error - createAlbum failing')
          });
      }
    }
  } catch (error) {
    console.log('error');
    res.status(500);
    res.json(error);
  }
}

async function getArtistAlbums(req: Request, res: Response) {
  try {
    if (!req.params.artistId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const artistId = req.params.artistId;
      const artist = await Artist.findByPk(artistId);

      if (!artist) {
        res.status(400);
        res.json('Artist not found');
      } else {
        const _albums = await Album.findAll({where: {ArtistId: artistId}});
        res.json(_albums);
        res.status(201);
      }
    }
  } catch (error) {
    console.log('error');
    res.status(500);
    res.json(error);
  }
 }

async function getArtistAlbum(req: Request, res: Response) {
  try {
    if (!req.params.artistId || !req.params.albumId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const artistId = req.params.artistId;
      const albumId = req.params.albumId;
      const artist = await Artist.findByPk(artistId);
      const album = await Album.findByPk(albumId);

      if (!artist) {
        res.status(400);
        res.json('Artist not found');
      } else if (!album) {
        res.status(400);
        res.json('Album not found');
      }
      else {
        const _albums = await Album.findAll({where: {id: albumId, ArtistId: artistId}});
        res.json(_albums);
        res.status(201);
      }
    }
  } catch (error) {
    console.log('error');
    res.status(500);
    res.json(error);
  }
 }

module.exports = { createAlbum, getAlbums, getAlbum, getArtistAlbums, getArtistAlbum };

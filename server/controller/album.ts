import { Request, Response } from 'express';
import { Album, Artist } from "../models";

async function getAlbums(req: Request, res: Response) {
  try {
    const _albums = await Album.findAll();
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
    const _album = await Album.findByPk(req.params.id);
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
    if (!req.body.artistId) {
      res.send(400);
      res.json('incorrect schema for request');
    } else {
      const artistId = req.body.artistId;
      const artist = await Artist.findByPk(artistId);

      if (!artist) {
        res.status(400);
        res.json('Artist not found');
      } else {
        const _album = await Album.create({
          name: req.body.name,
          year: req.body.year,
          description: req.body.description
        });

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
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

export { createAlbum, getAlbums, getAlbum}
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
  console.log("in createAlbum")
  try {
    if (!req.params.artistId) {
      res.status(400);
      res.json('incorrect schema for request');
      console.log("not correct schema")
    } else {
      const artistId = req.params.artistId;
      // console.log("artistId", artistId);
      // const artist = await Artist.findOne({ where: { id: artistId } });
      const artist = await Artist.findByPk(artistId);
      // console.log("artist", artist);

      if (!artist) {
        res.status(400);
        res.json('Artist not found');
      } else {
        console.log(' before create album', req.body)
        const _album = await Album.create(
          req.body
        );

        console.log("album", _album);

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
    //console.log(error);
    console.log('error');
    res.status(500);
    res.json(error);
  }
}

async function getArtistAlbums(req: Request, res: Response) { }

async function getArtistAlbum(req: Request, res: Response) { }


// export { createAlbum, getAlbums, getAlbum, getArtistAlbums, getArtistAlbum }
module.exports = { createAlbum, getAlbums, getAlbum, getArtistAlbums, getArtistAlbum };

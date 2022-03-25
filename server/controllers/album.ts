import { Request, Response } from 'express';
import { Album, AlbumToken, Artist } from "../models";
import { errorHandler } from "./error";

async function getAlbums(req: Request, res: Response) {
  try {
    const _albums: Album[] = await Album.findAll();
    res.status(200);
    res.json(_albums);
  } catch (error) { errorHandler(res, error) }
}

async function getAlbum(req: Request, res: Response) {
  try {
    console.log("PARSED INT", parseInt(req.params.albumId));
    const _album = await Album.findByPk(+(req.params.albumId));
    console.log(_album);
    res.status(200);
    res.json(_album);
  } catch (error) {
    errorHandler(res, error)
  }
}

async function createAlbum(req: Request, res: Response) {
  try {
    if (!req.params.artistId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const artist = await Artist.findByPk(parseInt(req.params.artistId));

      if (!artist) {
        res.status(400);
        res.json('Artist not found');
      } else {
        const _album = await Album.create(req.body)

        for (var tokens = 0; tokens < _album.number_of_tokens; tokens++) {
          const _token = AlbumToken.build();
          await _token.save();
          await _token.setArtist(artist);
          await _token.setAlbum(_album);
        }

        _album
          .setArtist(artist)
          .then((_album) => {
            res.status(201);
            res.json(_album);
          })
          .catch((err) => {
            res.json('Database Error - createAlbum failing')
          });
      }
    }
  } catch (error) { errorHandler(res, error) }
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
        const _albums = await Album.findAll({ where: { ArtistId: artistId } });
        res.status(201);
        res.json(_albums);
      }
    }
  } catch (error) { errorHandler(res, error) }
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
      } else {
        const _album = await Album.findAll({ where: { id: albumId, ArtistId: artistId } });
        res.status(201);
        res.json(_album);
      }
    }
  } catch (error) { errorHandler(res, error) }
}

async function deleteAlbum(req: Request, res: Response) {
  const albumId = req.params.albumId;
  await AlbumToken.destroy({ where: { AlbumId: albumId } });
  await Album.destroy({ where: { id: albumId } });
  res.status(201);
  res.json();
}

module.exports = { createAlbum, getAlbums, getAlbum, getArtistAlbums, getArtistAlbum, deleteAlbum };

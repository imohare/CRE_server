import { Request, Response } from 'express';
import { Album, AlbumToken, Artist } from "../models";
import { createAlbumToken } from "./albumToken";

async function getAlbums(req: Request, res: Response) {
  try {
    const _albums: Album[] = await Album.findAll();
    res.status(200);
    res.json(_albums);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function getAlbum(req: Request, res: Response) {
  try {
    const _album = await Album.findByPk(req.params.albumId);
    res.status(200);
    res.json(_album);
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
        const _album = await Album.create({
          name: req.body.name,
          year: req.body.year, 
          description: req.body.description,
          number_of_tokens: req.body.number_of_tokens,
          tokens_image: req.body.tokens_image,
          tokens_value: req.body.value
        })

        _album
          .setArtist(artist)
          .then((_album) => {
            res.status(201);
            res.json(_album);
          })
          .catch((err) => {
            res.json('Database Error - createAlbum failing')
          });

          // for (var tokens = 0; tokens < _album.number_of_tokens; tokens++) {
          //   createAlbumToken(req, res);
          // }
      }
    }
  } catch (error) {
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
        res.status(201);
        res.json(_albums);
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
      } else {
        const _album = await Album.findAll({where: {id: albumId, ArtistId: artistId}});
        res.status(201);
        res.json(_album);
      }
    }
  } catch (error) {
    console.log('error');
    res.status(500);
    res.json(error);
  }
 }

 async function deleteAlbum(req: Request, res: Response) {
   const albumId = req.params.albumId;
   await AlbumToken.destroy({where: {AlbumId: albumId}});
   await Album.destroy({where: {id: albumId}});
   res.status(201);
   res.json();
 }

module.exports = { createAlbum, getAlbums, getAlbum, getArtistAlbums, getArtistAlbum, deleteAlbum };

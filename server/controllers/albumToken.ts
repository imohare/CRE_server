import { Request, Response } from 'express';
import { AlbumToken, Album } from "../models";

async function getAlbumTokens(req: Request, res: Response) {
  try {
    const _tokens: AlbumToken[] = await AlbumToken.findAll();
    res.json(_tokens);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function getAlbumToken(req: Request, res: Response) {
  try {
    const _token = await AlbumToken.findByPk(req.params.tokenId);
    res.json(_token);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function createAlbumToken(req: Request, res: Response) {
  try {
    if (!req.params.albumId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const albumId = req.params.albumId;
      const album = await Album.findByPk(albumId);

      if (!album) {
        res.status(400);
        res.json('Album not found');
      } else {
        const _token = await AlbumToken.create(req.body);

        _token
          .setAlbum(album)
          .then((_token) => {
            res.json(_token);
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
async function getArtistAlbumTokens(req: Request, res: Response) {}
async function getConsumerAlbumTokens(req: Request, res: Response) {}

export { getAlbumTokens, getAlbumToken, createAlbumToken, getArtistAlbumTokens, getConsumerAlbumTokens }
import { Request, Response } from 'express';

import { AlbumToken, Album, Artist, Consumer } from "../models";

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
    if (!req.params.albumId || !req.params.artistId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const artistId = req.params.artistId
      const albumId = req.params.albumId;
      const artist = await Artist.findByPk(artistId);
      const album = await Album.findByPk(albumId);

      if (!album) {
        res.status(400);
        res.json('Album not found');
      } else if (!artist) {
        res.status(400);
        res.json('Artist not found');
      } else {

        const _token = AlbumToken.build(
          {
            image: req.body.image,
            consumer_points: req.body.consumer_points,
            edition_number: req.body.edition_number,
            total_editions: req.body.total_editions,
          }

        );
        await _token.save();
        await _token.setArtist(artist);
        await _token.setAlbum(album);
        res.json(_token);
        res.status(201);
      }
    }
  } catch (error) {
    console.log('error');
    res.status(500);
    res.json(error);
  }
}

async function getArtistAlbumsTokens(req: Request, res: Response) {
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
        const _tokens = await AlbumToken.findAll({ where: { ArtistId: artistId } });
        res.json(_tokens);
      }
    }
  }
  catch (error) {
    console.log('error');
    res.status(500);
    res.json(error);
  }
}

async function getConsumerAlbumTokens(req: Request, res: Response) {
  try {
    if (!req.params.albumId || !req.params.consumerId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const albumId = req.params.albumId;
      const consumerId = req.params.consumerId;

      const album = await Album.findByPk(albumId);
      const consumer = await Consumer.findByPk(consumerId);

      if (!album) {
        res.status(400);
        res.json('Album not found');
      } else if (!consumer) {
        res.status(400);
        res.json('Consumer not found');
      } else {
        const _tokens = await AlbumToken.findAll({ where: { AlbumId: albumId, ConsumerId: consumerId } });
        res.json(_tokens);
        res.status(201);
      }
    }
  }
  catch (error) {
    console.log('error');
    res.status(500);
    res.json(error);
  }
}



export { getAlbumTokens, getAlbumToken, createAlbumToken, getConsumerAlbumTokens, getArtistAlbumsTokens }

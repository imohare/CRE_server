import { Request, Response } from 'express';
import { NotIn } from 'sequelize-typescript';
import { AlbumToken, Album, Artist, Consumer } from "../models";
import { errorHandler } from "./error";

async function getAlbumTokens(req: Request, res: Response) {
  try {
    const _tokens: AlbumToken[] = await AlbumToken.findAll();
    res.json(_tokens);
    res.status(200);
  } catch (error) { errorHandler(res, error) }
}

async function getAlbumToken(req: Request, res: Response) {
  try {
    const _token = await AlbumToken.findByPk(req.params.tokenId);
    res.json(_token);
    res.status(200);
  } catch (error) { errorHandler(res, error) }
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
  } catch (error) { errorHandler(res, error) }
}

async function getAlbumTokenByAlbumId(req: Request, res: Response) {
  try {
    if (!req.params.albumId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const albumId = req.params.albumId;
      const _albumToken = AlbumToken.findOne({ where: { AlbumId: albumId } });
      res.json(_albumToken);
    }
  }
  catch (err) {
    errorHandler(res, err);
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
        res.status(201);
        res.json(_tokens);
      }
    }
  } catch (error) { errorHandler(res, error) }
}

async function getConsumerAlbumTokensByConsumerId(req: Request, res: Response) {
  try {
    if (!req.params.consumerId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const consumerId = req.params.consumerId;
      const consumer = await Consumer.findByPk(consumerId);

      if (!consumer) {
        res.status(400);
        res.json('Consumer not found');
      } else {
        const _tokens = await AlbumToken.findAll({ where: { ConsumerId: consumerId } });
        res.json(_tokens);
        res.status(201);
      }
    }
  } catch (error) { errorHandler(res, error) }
}

export { getAlbumTokens, getAlbumToken, getConsumerAlbumTokens, getArtistAlbumsTokens, getConsumerAlbumTokensByConsumerId, getAlbumTokenByAlbumId }

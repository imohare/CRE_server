import { Request, Response } from 'express';
import { AlbumToken, Album, Consumer } from "../models";

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
        const _token = AlbumToken.build(
          {
            image: req.body.image,
            consumer_points: req.body.consumer_points,
            edition_number: req.body.edition_number,
            total_editions: req.body.total_editions,
            token_type: req.body.token_type
          }
          );
          await _token.save();
          await _token.setAlbum(album);
          console.log('token', _token)
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

async function getArtistAlbumTokens(req: Request, res: Response) {}

async function getConsumerAlbumTokens(req: Request, res: Response) {
  try {
    if (!req.params.albumId || !req.params.consumerId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const albumId = req.params.albumId;
      const consumerId = req.params.consumerId;

      const album = await Album.findByPk(albumId);
      console.log("album", album)
      const consumer = await Consumer.findByPk(consumerId);
      console.log("consumer", consumer)


      if (!album) {
        res.status(400);
        res.json('Album not found');
      } else if (!consumer) {
        res.status(400);
        res.json('Consumer not found');
       } else {
         const _tokens = await AlbumToken.findAll({where: {AlbumId: albumId, ConsumerId: consumerId} });
         console.log("tokens", _tokens)
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


export { getAlbumTokens, getAlbumToken, createAlbumToken, getArtistAlbumTokens, getConsumerAlbumTokens }
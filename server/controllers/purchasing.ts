import { Request, Response } from 'express';
import { Album, AlbumToken, Artist, Consumer, Event, EventToken, Merchandise, MerchandiseToken, Points } from "../models";

async function albumTokenPurchase(req: Request, res: Response) {
  try {
    if (!req.params.consumerId || !req.params.albumTokenId || !req.params.artistId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const consumerId = req.params.consumerId;
      const albumTokenId = req.params.albumTokenId;
      const artistId = req.params.artistId;
      const albumId = req.params.albumId;
      const _consumer = await Consumer.findByPk(consumerId);
      const _albumToken = await AlbumToken.findByPk(albumTokenId);
      const _artist = await Artist.findByPk(artistId);
      const _album = await Album.findByPk(albumId);
      if (!_consumer) {
        res.status(400);
        res.json('Consumer not found');
      } else if (!_albumToken) {
        res.status(400);
        res.json('Album token not found');
      } else if (!_artist) {
        res.status(400);
        res.json('Artist not found');
      } else if (!_album) {
        res.status(400);
        res.json('Album not found');
      } else {
        _albumToken
          .setConsumer(_consumer)

        const _points = await Points.findOne({where: {ArtistId: artistId, ConsumerId: consumerId}})
        if (!_points) {
          const newPoints = await Points.create({points: _album.tokens_value})
          await newPoints.setArtist(_artist);
          await newPoints.setConsumer(_consumer);
          res.json();

        } else {
          await _points.update({points: _points.points + _album.tokens_value});
          await _points.save();
          res.json();
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function eventTokenPurchase(req: Request, res: Response) {
  try {
    if (!req.params.consumerId || !req.params.eventTokenId || !req.params.artistId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const consumerId = req.params.consumerId;
      const eventTokenId = req.params.eventTokenId;
      const artistId = req.params.artistId;
      const eventId = req.params.eventId;
      const _consumer = await Consumer.findByPk(consumerId);
      const _eventToken = await EventToken.findByPk(eventTokenId);
      const _artist = await Artist.findByPk(artistId);
      const _event = await Event.findByPk(eventId);

      if (!_consumer) {
        res.status(400);
        res.json('Consumer not found');
      } else if (!_eventToken) {
        res.status(400);
        res.json('Event Token not found');
      } else if (!_artist) {
        res.status(400);
        res.json('Artist not found');
      } else if (!_event) {
        res.status(400);
        res.json('Event not found');
      } else {
        _eventToken
          .setConsumer(_consumer)
        
        const _points = await Points.findOne({where: {ArtistId: artistId, ConsumerId: consumerId}})
        if (!_points) {
          const newPoints = await Points.create({points: _event.tokens_value})
          await newPoints.setArtist(_artist);
          await newPoints.setConsumer(_consumer);
          res.json();

        } else {
          await _points.update({points: _points.points + _event.tokens_value});
          await _points.save();
          res.json();
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function merchandiseTokenPurchase(req: Request, res: Response) {
  try {
    if (!req.params.consumerId || !req.params.merchandiseTokenId || !req.params.artistId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const consumerId = req.params.consumerId;
      const merchandiseTokenId = req.params.merchandiseTokenId;
      const artistId = req.params.artistId;
      const merchandiseId = req.params.merchandiseId;
      const _consumer = await Consumer.findByPk(consumerId);
      const _merchandiseToken = await MerchandiseToken.findByPk(merchandiseTokenId);
      const _artist = await Artist.findByPk(artistId);
      const _merchandise = await Merchandise.findByPk(merchandiseId);
      if (!_consumer) {
        res.status(400);
        res.json('Consumer not found');
      } else if (!_merchandiseToken) {
        res.status(400);
        res.json('Merchandise Token not found');
      } else if (!_artist) {
        res.status(400);
        res.json('Artist not found');
      } else if (!_merchandise) {
        res.status(400);
        res.json('Merchandise not found');
      } else {
        _merchandiseToken
          .setConsumer(_consumer)

          const _points = await Points.findOne({where: {ArtistId: artistId, ConsumerId: consumerId}})
          if (!_points) {
            const newPoints = await Points.create({points: _merchandise.tokens_value})
            await newPoints.setArtist(_artist);
            await newPoints.setConsumer(_consumer);
            res.json();
  
          } else {
            await _points.update({points: _points.points + _merchandise.tokens_value});
            await _points.save();
            res.json();    
        }
     }
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

export { albumTokenPurchase, eventTokenPurchase, merchandiseTokenPurchase };
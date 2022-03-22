import { Request, Response } from 'express';
import { Artist, EventToken, Event, Consumer } from "../models";

async function getEventTokens(req: Request, res: Response) {
  try {
    const _tokens: EventToken[] = await EventToken.findAll();
    res.json(_tokens);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function getEventToken(req: Request, res: Response) {
  try {
    const _token = await EventToken.findByPk(req.params.tokenId);
    res.json(_token);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function createEventToken(req: Request, res: Response) {
  try {
    if (!req.params.eventId || !req.params.artistId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const artistId = req.params.artistId;
      const eventId = req.params.eventId;
      const event = await Event.findByPk(eventId);
      const artist = await Artist.findByPk(artistId);

      if (!event) {
        res.status(400);
        res.json('Event not found');
      } else if (!artist) {
        res.status(400);
        res.json('Artist not found');
      } else {
        const _token = EventToken.build(
          {
            image: req.body.image,
            consumer_points: req.body.consumer_points,
            edition_number: req.body.edition_number,
            total_editions: req.body.total_editions,
          }
          );
          await _token.save();
          await _token.setEvent(event);
          await _token.setArtist(artist);
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

async function getArtistEventsTokens(req: Request, res: Response) {
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
        const _tokens = await EventToken.findAll({where:{ ArtistId: artistId }});
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

async function getConsumerEventTokens(req: Request, res: Response) {
  try {
    if (!req.params.eventId || !req.params.consumerId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const eventId = req.params.eventId;
      const consumerId = req.params.consumerId;

      const event = await Event.findByPk(eventId);
      const consumer = await Consumer.findByPk(consumerId);

      if (!event) {
        res.status(400);
        res.json('Event not found');
      } else if (!consumer) {
        res.status(400);
        res.json('Consumer not found');
       } else {
         const _tokens = await EventToken.findAll({where: {EventId: eventId, ConsumerId: consumerId} });
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

export { getEventTokens, getEventToken, createEventToken, getArtistEventsTokens, getConsumerEventTokens }
import { Request, Response } from 'express';
import { Artist, EventToken, Event, Consumer } from "../models";
import { errorHandler } from './error';


async function getEventTokens(req: Request, res: Response) {
  try {
    const _tokens: EventToken[] = await EventToken.findAll();
    res.json(_tokens);
    res.status(200);
  } catch (error) { errorHandler(res, error) }
}

async function getEventToken(req: Request, res: Response) {
  try {
    const _token = await EventToken.findByPk(req.params.tokenId);
    res.json(_token);
    res.status(200);
  } catch (error) { errorHandler(res, error) }
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
        const _tokens = await EventToken.findAll({ where: { ArtistId: artistId } });
        res.json(_tokens);
      }
    }
  } catch (error) { errorHandler(res, error) }
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
        const _tokens = await EventToken.findAll({ where: { EventId: eventId, ConsumerId: consumerId } });
        res.json(_tokens);
        res.status(201);
      }
    }
  } catch (error) { errorHandler(res, error) }
}

async function getConsumerEventTokensByConsumerId(req: Request, res: Response) {
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
        const _tokens = await EventToken.findAll({ where: { ConsumerId: consumerId } });
        res.json(_tokens);
        res.status(201);
      }
    }
  } catch (error) { errorHandler(res, error) }
}

export { getEventTokens, getEventToken, getArtistEventsTokens, getConsumerEventTokens, getConsumerEventTokensByConsumerId }
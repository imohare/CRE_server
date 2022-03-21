import { Request, Response } from 'express';
import { EventToken, Event } from "../models";

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
    if (!req.params.eventId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const eventId = req.params.eventId;
      const event = await Event.findByPk(eventId);

      if (!event) {
        res.status(400);
        res.json('Event not found');
      } else {
        console.log("re.body", req.body)
        const _token = EventToken.build(
          {
            image: req.body.image,
            consumer_points: req.body.consumer_points,
            edition_number: req.body.edition_number,
            total_editions: req.body.total_editions,
            token_type: req.body.token_type
          }
          );
          await _token.save();
          await _token.setEvent(event);
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

async function getArtistEventTokens(req: Request, res: Response) {}
async function getConsumerEventTokens(req: Request, res: Response) {}

export { getEventTokens, getEventToken, createEventToken, getArtistEventTokens, getConsumerEventTokens }
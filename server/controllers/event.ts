import { Request, Response } from 'express';
import { Event, Artist } from "../models";

async function getEvents(req: Request, res: Response) {
  try {
    const _events = await Event.findAll();
    res.json(_events);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function getEvent(req: Request, res: Response) {
  console.log("in get event");
  try {
    const _event = await Event.findByPk(req.params.eventId);
    console.log(_event, "event");
    res.json(_event);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function createEvent(req: Request, res: Response) {
  console.log("in create Event");
  try {
    if (!req.params.artistId) {
      res.send(400);
      res.json('incorrect schema for request');
    } else {
      const artistId = req.params.artistId;
      const artist = await Artist.findByPk(artistId);

      if (!artist) {
        res.status(400);
        res.json('Artist not found');
      } else {
        const _event = await Event.create({
          name: req.body.name,
          address: req.body.address,
          date: req.body.date,
          description: req.body.description
        });

        _event
          .setArtist(artist)
          .then((_event) => {
            res.json(_event);
            res.status(201);
          })
          .catch((err) => {
            res.json('Database Error - createAlbum failing')
          });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function getArtistEvents(req: Request, res: Response) {
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
        const _event = await Event.findAll({where: {ArtistId: artistId}});
        res.json(_event);
        res.status(201);
      }
    }
  } catch (error) {
    console.log('error');
    res.status(500);
    res.json(error);
  }
 }

async function getArtistEvent(req: Request, res: Response) { }

export { createEvent, getEvents, getEvent, getArtistEvents }
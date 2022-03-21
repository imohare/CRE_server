import { Request, Response } from 'express';
import { Merchandise, Artist } from "../models";

async function getMerchandises(req: Request, res: Response) {
  try {
    const _merchandises = await Merchandise.findAll();
    res.json(_merchandises);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function getMerchandise(req: Request, res: Response) {
  try {
    const _merchandise = await Merchandise.findByPk(req.params.merchandiseId);
    res.json(_merchandise);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function createMerchandise(req: Request, res: Response) {
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
        const _event = await Merchandise.create({
          name: req.body.name,
          type: req.body.type,
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

async function getArtistMerchandises(req: Request, res: Response) {}

async function getArtistMerchandise(req: Request, res: Response) {}


export { createMerchandise, getMerchandises, getMerchandise, getArtistMerchandises, getArtistMerchandise }
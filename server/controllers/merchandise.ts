import { Request, Response } from 'express';
import { Merchandise, Artist, MerchandiseToken } from "../models";
import { errorHandler } from './error';

async function getMerchandises(req: Request, res: Response) {
  try {
    const _merchandises = await Merchandise.findAll();
    res.json(_merchandises);
    res.status(200);
  } catch (error) { errorHandler(res, error) }
}

async function getMerchandise(req: Request, res: Response) {
  try {
    console.log('in get merchandise backend')
    const _merchandise = await Merchandise.findByPk(req.params.merchandiseId);
    res.json(_merchandise);
    res.status(200);
  } catch (error) { errorHandler(res, error) }
}

async function createMerchandise(req: Request, res: Response) {
  try {
    if (!req.params.artistId) {
      res.send(400);
      res.json('incorrect schema for request');
    } else {
      const artist = await Artist.findByPk(req.params.artistId);

      if (!artist) {
        res.status(400);
        res.json('Artist not found');
      } else {
        const _merchandise = await Merchandise.create(req.body);

        for (var tokens = 0; tokens < _merchandise.number_of_tokens; tokens++) {
          const _token = MerchandiseToken.build();
          await _token.save();
          await _token.setArtist(artist);
          await _token.setMerchandise(_merchandise);
        }

        _merchandise
          .setArtist(artist)
          .then((_merchandise) => {
            res.json(_merchandise);
            res.status(201);
          })
          .catch((err) => {
            res.json('Database Error - createMerchandise failing')
          });
      }
    }
  } catch (error) { errorHandler(res, error) }
}

async function getArtistMerchandises(req: Request, res: Response) {
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
        const _merchandises = await Merchandise.findAll({ where: { ArtistId: artistId } });
        res.json(_merchandises);
        res.status(201);
      }
    }
  } catch (error) { errorHandler(res, error) }
}

async function getArtistMerchandise(req: Request, res: Response) {
  try {
    if (!req.params.artistId || !req.params.merchandiseId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const artistId = req.params.artistId;
      const merchandiseId = req.params.merchandiseId;
      const artist = await Artist.findByPk(artistId);
      const merchandise = await Merchandise.findByPk(merchandiseId);

      if (!artist) {
        res.status(400);
        res.json('Artist not found');
      } else if (!merchandise) {
        res.status(400);
        res.json('Album not found');
      }
      else {
        const _merchandise = await Merchandise.findAll({ where: { id: merchandiseId, ArtistId: artistId } });
        res.json(_merchandise);
        res.status(201);
      }
    }
  } catch (error) { errorHandler(res, error) }
}

async function deleteMerchandise(req: Request, res: Response) {
  const merchandiseId = req.params.merchandiseId;
  await MerchandiseToken.destroy({ where: { MerchandiseId: merchandiseId } });
  await Merchandise.destroy({ where: { id: merchandiseId } });
  res.status(201);
  res.json();
}

export { createMerchandise, getMerchandises, getMerchandise, getArtistMerchandises, getArtistMerchandise, deleteMerchandise }
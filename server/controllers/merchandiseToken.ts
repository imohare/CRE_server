import { Request, Response } from 'express';
import { Artist, Consumer, MerchandiseToken, Merchandise } from "../models";


async function getMerchandiseTokens(req: Request, res: Response) {
  try {
    const _tokens: MerchandiseToken[] = await MerchandiseToken.findAll();
    res.json(_tokens);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function getMerchandiseToken(req: Request, res: Response) {
  try {
    const _token = await MerchandiseToken.findByPk(req.params.tokenId);
    res.json(_token);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function createMerchandiseToken(req: Request, res: Response) {
  try {
    if (!req.params.merchandiseId || !req.params.artistId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const artistId = req.params.artistId
      const merchandiseId = req.params.merchandiseId;
      const artist = await Artist.findByPk(artistId);
      const merchandise = await Merchandise.findByPk(merchandiseId);

      if (!merchandise) {
        res.status(400);
        res.json('Merchandise not found');
      } else if (!artist) {
        res.status(400);
        res.json('Artist not found');
      } else {
        console.log("re.body", req.body)
        const _token = MerchandiseToken.build(
          {
            image: req.body.image,
            consumer_points: req.body.consumer_points,
            edition_number: req.body.edition_number,
            total_editions: req.body.total_editions,
          }
        );
        await _token.save();
        await _token.setArtist(artist);
        await _token.setMerchandise(merchandise);
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



async function getArtistMerchandisesTokens(req: Request, res: Response) {
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
        const _tokens = await MerchandiseToken.findAll({ where: { ArtistId: artistId } });
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

async function getConsumerMerchandiseTokens(req: Request, res: Response) {
  try {
    if (!req.params.merchandiseId || !req.params.consumerId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const merchandiseId = req.params.merchandiseId;
      const consumerId = req.params.consumerId;

      const merchandise = await Merchandise.findByPk(merchandiseId);
      const consumer = await Consumer.findByPk(consumerId);

      if (!merchandise) {
        res.status(400);
        res.json('Merchandise not found');
      } else if (!consumer) {
        res.status(400);
        res.json('Consumer not found');
      } else {
        const _tokens = await MerchandiseToken.findAll({ where: { MerchandiseId: merchandiseId, ConsumerId: consumerId } });
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

export { getMerchandiseTokens, getMerchandiseToken, createMerchandiseToken, getArtistMerchandisesTokens, getConsumerMerchandiseTokens }
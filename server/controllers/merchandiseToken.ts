import { Request, Response } from 'express';
import { Consumer, MerchandiseToken, Merchandise } from "../models";

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
    if (!req.params.merchandiseId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const merchandiseId = req.params.merchandiseId;
      const merchandise = await Merchandise.findByPk(merchandiseId);

      if (!merchandise) {
        res.status(400);
        res.json('Merchandise not found');
      } else {
        console.log("re.body", req.body)
        const _token = MerchandiseToken.build(
          {
            image: req.body.image,
            consumer_points: req.body.consumer_points,
            edition_number: req.body.edition_number,
            total_editions: req.body.total_editions,
            token_type: req.body.token_type
          }
          );
          await _token.save();
          await _token.setMerchandise(merchandise);
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


async function getArtistMerchandiseTokens(req: Request, res: Response) {}
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
         const _tokens = await MerchandiseToken.findAll({where: {MerchandiseId: merchandiseId, ConsumerId: consumerId} });
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

export { getMerchandiseTokens, getMerchandiseToken, createMerchandiseToken, getArtistMerchandiseTokens, getConsumerMerchandiseTokens }
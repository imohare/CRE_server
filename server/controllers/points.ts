import { Request, Response } from 'express';
import { Points, Consumer } from "../models";
import { errorHandler } from './error';

async function getConsumerPointsByConsumerId(req: Request, res: Response) {
  try {
    if (!req.params.consumerId) {
      console.log("hi")
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const consumerId = req.params.consumerId;
      const consumer = await Consumer.findByPk(consumerId);
      console.log("consumer", consumer)

      if (!consumer) {
        res.status(400);
        res.json('Consumer not found');
      } else {
        const _tokens = await Points.findAll({ where: { ConsumerId: consumerId } });
        res.json(_tokens);
        res.status(201);
      }
    }
  } catch (error) { errorHandler(res, error) }
}

export { getConsumerPointsByConsumerId };
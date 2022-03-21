import { Request, Response } from 'express';
import { Consumer } from "../models";

async function createConsumer(req: Request, res: Response) {
  const _consumer = await Consumer.create({
    eth_address: req.body.eth_address,
    username: req.body.username,
    location: req.body.location,
    points: 0,
    email: req.body.email,
  })
  res.send(_consumer);
}

async function getConsumer(req: Request, res: Response) {
  try {
    const _consumer = await Consumer.findByPk(req.params.consumerId);
    res.json(_consumer);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

export { createConsumer, getConsumer }
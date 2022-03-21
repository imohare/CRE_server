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
async function getConsumer(req: Request, res: Response) {}
async function patchConsumerPoints(req: Request, res: Response) {}

export { createConsumer, getConsumer, patchConsumerPoints }
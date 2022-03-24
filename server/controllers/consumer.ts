import { Request, Response } from 'express';
import { AlbumToken, Consumer, EventToken, MerchandiseToken, Points } from "../models";

async function createConsumer(req: Request, res: Response) {
  const _consumer = await Consumer.create({
    eth_address: req.body.eth_address,
    username: req.body.username,
    profile_picture: req.body.profile_picture,
    location: req.body.location,
    email: req.body.email,
  })
  res.send(_consumer);
}

async function getConsumerById(req: Request, res: Response) {
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

async function getConsumerByEthAddress(req: Request, res: Response) {
  try {
    console.log("in backend--> get consumer by eth address")
    const _artist = await Consumer.findOne({ where: { eth_address: req.params.eth_address } });
    res.status(200);
    res.json(_artist);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}



async function getConsumerByUsername(req: Request, res: Response) {
  try {
    const _consumer = await Consumer.findOne({ where: { username: req.body.username } });
    res.json(_consumer);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

async function deleteConsumer(req: Request, res: Response) {
  const consumerId = req.params.consumerId;
  await AlbumToken.destroy({ where: { ConsumerId: consumerId } });
  await EventToken.destroy({ where: { ConsumerId: consumerId } });
  await MerchandiseToken.destroy({ where: { ConsumerId: consumerId } });
  await Points.destroy({ where: { ConsumerId: consumerId } });
  await Consumer.destroy({ where: { id: consumerId } });
  res.status(201);
  res.json();
}

export { createConsumer, getConsumerById, getConsumerByUsername, deleteConsumer, getConsumerByEthAddress }
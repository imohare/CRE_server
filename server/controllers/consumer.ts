import { Request, Response } from 'express';
import { Consumer } from "../models";

async function createConsumer(req: Request, res: Response) {}
async function getConsumer(req: Request, res: Response) {}
async function patchConsumerPoints(req: Request, res: Response) {}

export { createConsumer, getConsumer, patchConsumerPoints }
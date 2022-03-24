import { Request, Response } from 'express';

const errorHandler = (res: Response, error: any) => {
  console.log(error);
  res.status(500);
  res.json(error);
}

export { errorHandler }
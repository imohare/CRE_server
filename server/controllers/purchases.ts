import { Request, Response } from 'express';
import { AlbumToken, Consumer } from "../models";

async function consumerTokenAllocation(req: Request, res: Response) {
  try {
    if (!req.params.consumerId || !req.params.tokenId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const _consumer = await Consumer.findByPk(req.params.consumerId);
      const _albumToken = await AlbumToken.findByPk(req.params.tokenId);
      if (!_consumer || !_albumToken) {
        res.status(400);
        res.json('Consumer or Album Token not found');
      } else {
        _albumToken
          .setConsumer(_consumer)
          .then((_albumToken) => {
            res.json(_albumToken);
            res.status(201);
          })
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json(error);
  }
}

// async function consumerPointsIncrease(req: Request, res: Response) {
//           try {
//             if (!req.params.consumerId || !req.params.tokenId) {
//               res.status(400);
//               res.json('incorrect schema for request');
//             } else {
//               const _consumer = await Consumer.findByPk(req.params.consumerId);
//               const _albumToken = await AlbumToken.findByPk(req.params.tokenId);
//               if (!_consumer || !_albumToken) {
//                 res.status(400);
//                 res.json('Consumer or Album Token not found');
//               } else {
//                 const newPoints = _consumer.points += _albumToken.consumer_points;
//                 //_consumer.update(set points = newPoints)
//               }
//             }
//           } catch (error) {
//             console.log(error);
//             res.status(500);
//             res.json(error);
//           }
//         }

export { consumerTokenAllocation };
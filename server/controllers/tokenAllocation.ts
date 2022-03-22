import { Request, Response } from 'express';
import { AlbumToken, Consumer, EventToken, MerchandiseToken } from "../models";

async function consumerAlbumTokenAllocation(req: Request, res: Response) {
  try {
    if (!req.params.consumerId || !req.params.albumTokenId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const _consumer = await Consumer.findByPk(req.params.consumerId);
      const _albumToken = await AlbumToken.findByPk(req.params.albumTokenId);
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

async function consumerEventTokenAllocation(req: Request, res: Response) {
  try {
    if (!req.params.consumerId || !req.params.eventTokenId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const _consumer = await Consumer.findByPk(req.params.consumerId);
      const _eventToken = await EventToken.findByPk(req.params.eventTokenId);
      if (!_consumer || !_eventToken) {
        res.status(400);
        res.json('Consumer or Event Token not found');
      } else {
        _eventToken
          .setConsumer(_consumer)
          .then((_eventToken) => {
            res.json(_eventToken);
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

async function consumerMerchandiseTokenAllocation(req: Request, res: Response) {
  try {
    if (!req.params.consumerId || !req.params.merchandiseTokenId) {
      res.status(400);
      res.json('incorrect schema for request');
    } else {
      const _consumer = await Consumer.findByPk(req.params.consumerId);
      const _merchandiseToken = await MerchandiseToken.findByPk(req.params.merchandiseTokenId);
      if (!_consumer || !_merchandiseToken) {
        res.status(400);
        res.json('Consumer or Merchandise Token not found');
      } else {
        _merchandiseToken
          .setConsumer(_consumer)
          .then((_merchandiseToken) => {
            res.json(_merchandiseToken);
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

export { consumerAlbumTokenAllocation, consumerEventTokenAllocation, consumerMerchandiseTokenAllocation };
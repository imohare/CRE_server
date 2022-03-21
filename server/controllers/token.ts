// import { Request, Response } from 'express';
// import { Token, Artist, Album, Event, Merchandise } from "../models";

// async function getTokens(req: Request, res: Response) {
//   try {
//     const _tokens: Token[] = await Token.findAll();
//     res.json(_tokens);
//     res.status(200);
//   } catch (error) {
//     console.log(error);
//     res.status(500);
//     res.json(error);
//   }
// }

// async function getToken(req: Request, res: Response) {
//   try {
//     const _token = await Token.findByPk(req.params.tokenId);
//     res.json(_token);
//     res.status(200);
//   } catch (error) {
//     console.log(error);
//     res.status(500);
//     res.json(error);
//   }
// }

// async function createAlbumToken(req: Request, res: Response) {
//   try {
//     if (!req.params.albumId) {
//       res.status(400);
//       res.json('incorrect schema for request');
//     } else {
//       const albumId = req.params.albumId;
//       const album = await Album.findByPk(albumId);

//       if (!album) {
//         res.status(400);
//         res.json('Album not found');
//       } else {
//         const _token = await Token.create(req.body);

//         _token
//           .setAlbum(album)
//           .then((_token) => {
//             res.json(_token);
//             res.status(201);
//           })

//           .catch((err) => {
//             res.json('Database Error - createAlbum failing')
//           });
//       }
//     }
//   } catch (error) {
//     console.log('error');
//     res.status(500);
//     res.json(error);
//   }
// }
// async function getArtistTokens(req: Request, res: Response) {}
// async function getArtistAlbumTokens(req: Request, res: Response) {}
// async function geArtistEventTokens(req: Request, res: Response) {}
// async function getArtistMerchandiseTokens(req: Request, res: Response) {}
// async function getConsumerTokens(req: Request, res: Response) {}


// export { getTokens, getToken, createAlbumToken, getArtistTokens, getArtistAlbumTokens, geArtistEventTokens, getArtistMerchandiseTokens, getConsumerTokens }
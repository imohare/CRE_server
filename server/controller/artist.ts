import { Artist } from "../models";

async function createArtist(req: Request, res: Response) {
  const _artist = await Artist.create({
    eth_address: req.body.eth_address,
    username: req.body.username,
    website: req.body.username,
    instagram: req.body.instagram,
    twitter: req.body.twitter,
    discord: req.body.discord,
    spotify: req.body.spotify,
  })
}
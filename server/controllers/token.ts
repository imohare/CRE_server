import { Request, Response } from 'express';
import { Token, Artist, Album, Event, Merchandise } from "../models";

async function getTokens(req: Request, res: Response) {}
async function getToken(req: Request, res: Response) {}
async function createToken(req: Request, res: Response) {}
async function getArtistTokens(req: Request, res: Response) {}
async function getArtistAlbumTokens(req: Request, res: Response) {}
async function geArtistEventTokens(req: Request, res: Response) {}
async function getArtistMerchandiseTokens(req: Request, res: Response) {}
async function getConsumerTokens(req: Request, res: Response) {}


export { getTokens, getToken, createToken, getArtistTokens, getArtistAlbumTokens, geArtistEventTokens, getArtistMerchandiseTokens, getConsumerTokens }
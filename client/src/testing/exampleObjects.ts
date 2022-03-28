import { IArtist, IAlbum, IConsumer, IEvent, IMerchandise, IAlbumToken, IEventToken, IMerchToken, IPoints } from '../Data/DataTypes';

const exampleArtist:IArtist = {
  eth_address: 'kloi876thjmnbcder56ui',
  name: 'Lancey',
  profile_picture: 'https://elevator-wp-uploads.s3-us-west-2.amazonaws.com/2018/10/Lancey-Foux-11.jpg',
  website: 'https://www.elevatormag.com/lancey-foux-lets-his-bars-speak-for-themselves-in-latest-visual-no-intro',
  instagram: '',
  twitter: '',
  discord: '',
  spotify: '',
  id: 2,
  createdAt: new Date(),
  updatedAt: new Date()
}

const exampleConsumer: IConsumer = {
  eth_address: 'r678ikjhgfvbnmr6',
  username: 'Sherlock',
  profile_picture: '', 
  location: 'London',
  email: 'user@gmail.com',
  id: 3,
  createdAt: new Date(), 
  updatedAt: new Date()
}

const exampleAlbum: IAlbum = {
  name: 'Pink',
  year: '2020-03-02 23:00:23',
  description: "Pink is Lancey Foux's debut EP, posted on and featured on Hoodtapes",
  number_of_tokens: 5,
  tokens_image: 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F7f2b5d24f103535739f89b984b5ec818.1000x1000x1.png',
  tokens_value: 100,
  id: 7,
  createdAt: new Date(),
  updatedAt: new Date(),
  ArtistId: 2,
}

const exampleEvent: IEvent = {
  name: 'partey',
  address: '52 Horseferry Road',
  date: '2016-05-25',
  description: '',
  number_of_tokens: 7,
  tokens_image: '',
  tokens_value: 10,
  id: 8,
  createdAt: new Date(),
  updatedAt: new Date(), 
  ArtistId: 2, 
}

const exampleEventToken: IEventToken = {
  id: 3,
  createdAt: new Date(),
  updatedAt: new Date(),
  ArtistId: 2,
  EventId: 8
}

const exampleAlbumToken: IAlbumToken = {
  id: 9,
  createdAt: new Date(),
  updatedAt: new Date(),
  ArtistId: 2, 
  AlbumId: 7,
  ConsumerId: 1
}

const exampleMerchandise: IMerchandise = {
  name: 'T-shirt',
  type: 'clothing',
  description: 'a tshirt with a famous face',
  number_of_tokens: 4, 
  tokens_image: '', 
  tokens_value: 3, 
  id: 8,
  createdAt: new Date(),
  updatedAt: new Date(),
  ArtistId: 2,
}
const exampleMerchToken: IMerchToken = {
  id: 6,
  createdAt: new Date(),
  updatedAt: new Date(), 
  ArtistId: 2, 
  MerchId: 8
}

const examplePoints: IPoints = {
  points: 80,
  //auto-generated
  id: 15,
  createdAt: new Date(),
  updatedAt: new Date(),
  ConsumerId: 1,
  ArtistId: 2
}

export {
  exampleArtist,
  exampleConsumer,
  exampleAlbum,
  exampleAlbumToken,
  exampleEvent,
  exampleEventToken,
  exampleMerchandise,
  exampleMerchToken,
  examplePoints
};
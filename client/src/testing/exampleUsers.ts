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



export { exampleArtist, exampleConsumer };
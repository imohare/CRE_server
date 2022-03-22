import { Sequelize } from 'sequelize';
import { Artist } from './artist';
import { Album } from './album';
import { AlbumToken } from './albumToken';
import { Consumer } from './consumer';
import { Event } from './event';
import { EventToken } from './eventToken';
import { Merchandise } from './merchandise';
import { MerchandiseToken } from './merchandiseToken';
import { Points } from './points';

const HOST = process.env.HOST || '';
const USER = process.env.USER || '';
const PASSWORD = process.env.PASSWORD || '';
const dialect = 'postgres';
const options = {
    dialect: 'postgres',
    port: Number(process.env.PORT) || ''
};

// Open database connection
export const sequelize = new Sequelize('cre', USER, PASSWORD, {
    host: HOST,
    dialect: dialect
});

// Initialise each model 
let models = [Artist, Album, AlbumToken, Consumer, Event, EventToken, Merchandise, MerchandiseToken, Points];
models.forEach((model) => model.initialize(sequelize));

// Associations
// Artist - Album associations
Album.belongsTo(Artist);
Artist.hasMany(Album);

// Artist - Event associations
Event.belongsTo(Artist);
Artist.hasMany(Event);

// Artist - Merchandise associations
Merchandise.belongsTo(Artist);
Artist.hasMany(Merchandise);

// Artist - AlbumToken associations
AlbumToken.belongsTo(Artist);
Artist.hasMany(AlbumToken);

// Album - AlbumToken associations
AlbumToken.belongsTo(Album);
Album.hasMany(AlbumToken);

// Event - Token associations
EventToken.belongsTo(Event);
Event.hasMany(EventToken);

// Merchandise - Token associations
MerchandiseToken.belongsTo(Merchandise);
Merchandise.hasMany(MerchandiseToken);

// AlbumToken - Consumer associations
AlbumToken.belongsTo(Consumer);
Consumer.hasMany(AlbumToken);

// EventToken - Consumer associations
EventToken.belongsTo(Consumer);
Consumer.hasMany(EventToken);

// MerchandiseToken - Consumer associations
MerchandiseToken.belongsTo(Consumer);
Consumer.hasMany(MerchandiseToken);

// Points - Consumer associations
Points.belongsTo(Consumer);
Consumer.hasMany(Points);

// Points - Artist associations
Points.belongsTo(Artist);
Artist.hasMany(Points);

//Create database tables
try {
    sequelize.sync({ force: false });
} catch (error) {
    console.error('Unable to connect to the database:', error);
};

export { sequelize as Database, Artist, Album, AlbumToken, Consumer, Event, EventToken, Merchandise, MerchandiseToken, Points};
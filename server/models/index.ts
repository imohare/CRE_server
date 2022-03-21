import { Sequelize } from 'sequelize';
import { Artist } from './artist';
import { Album } from './album';
import { AlbumToken } from './albumToken';
import { Consumer } from './consumer';
import { Event } from './event';
import { EventToken } from './eventToken';
import { Merchandise } from './merchandise';
import { MerchandiseToken } from './merchandiseToken';

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
let models = [Artist, Album, Consumer, Event, Merchandise, AlbumToken, EventToken, MerchandiseToken];
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

// Album - Token associations
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

//Create database tables
try {
    sequelize.sync({ force: false });
} catch (error) {
    console.error('Unable to connect to the database:', error);
};

export { sequelize as Database, Artist, Album, AlbumToken, Consumer, Event, EventToken, Merchandise, MerchandiseToken};
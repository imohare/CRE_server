import { Sequelize } from 'sequelize';
import { Artist } from './artist';
import { Album } from './album';
import { Consumer } from './consumer';
import { Event } from './event';
import { Merchandise } from './merchandise';
import { Token } from './token';

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
let models = [Artist, Album, Consumer, Event, Merchandise, Token];
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
Token.belongsTo(Album);
Album.hasMany(Token);

// Event - Token associations
Token.belongsTo(Event);
Event.hasMany(Token);

// Merchandise - Token associations
Token.belongsTo(Merchandise);
Merchandise.hasMany(Token);

// Token - Consumer associations
Token.belongsTo(Consumer);
Consumer.hasMany(Token);

//Create database tables
try {
    sequelize.sync({ force: false });
} catch (error) {
    console.error('Unable to connect to the database:', error);
};

export { sequelize as Database, Artist, Album, Consumer, Event, Merchandise, Token };
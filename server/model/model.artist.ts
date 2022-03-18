const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Artist extends Model<Artist>{ //extends Model<Artist>
    declare eth_address: string;
    declare website: string;
    declare instagram: string;
    declare twitter: string;
    declare discord: string;
    declare spotify: string;
    declare username: string;

}
Artist.init({
    eth_address: DataTypes.STRING,
    website: DataTypes.STRING,
    instagram: DataTypes.STRING,
    twitter: DataTypes.STRING,
    discord: DataTypes.STRING,
    spotify: DataTypes.STRING,
    username: DataTypes.STRING

}, { sequelize, modelName: 'artist' });



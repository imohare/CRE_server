const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Artist extends Model { }
Artist.init({
    eth_address: DataTypes.STRING,
    website: DataTypes.STRING,
    instagram: DataTypes.STRING,
    twitter: DataTypes.STRING,
    discord: DataTypes.STRING,
    spotify: DataTypes.STRING,
    username: DataTypes.STRING

}, { sequelize, modelName: 'artist' });



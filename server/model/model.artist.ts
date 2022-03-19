// import { InferAttributes } from "sequelize/types";
import { Sequelize, Model, DataTypes, InferAttributes, InferCreationAttributes } from 'sequelize';
//in node const require and module.exports, and 
//env 
const sequelize = require('./db.js')
const HOST = process.env.HOST || 'localhost'
const PASSWORD = process.env.PASSWORD

//Passing parameters

class Artist extends Model<InferAttributes<Artist>, InferCreationAttributes<Artist>>{ //extends Model<Artist>
    declare artist_id: number;
    declare eth_address: string;
    declare website: string;
    declare instagram: string;
    declare twitter: string;
    declare discord: string;
    declare spotify: string;
    declare username: string;
}
Artist.init({
    artist_id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    eth_address: DataTypes.STRING,
    website: DataTypes.STRING,
    instagram: DataTypes.STRING,
    twitter: DataTypes.STRING,
    discord: DataTypes.STRING,
    spotify: DataTypes.STRING,
    username: DataTypes.STRING

}, { sequelize, modelName: 'Artist' });



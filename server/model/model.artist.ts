import { InferAttributes } from "sequelize/types";

const { Sequelize, Model, DataTypes, InferAttributes, } = require('sequelize');
//env 
const sequelize = require('./db.ts')
const HOST = process.env.HOST || 'localhost'
const PASSWORD = process.env.PASSWORD

//Passing parameters

class Artist extends Model<InferAttributes<Artist>, InferCreationAttributes<Artist>>{ //extends Model<Artist>
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

}, { sequelize, modelName: 'Artist' });



// import { InferAttributes } from "sequelize/types";
import { Sequelize, Model, DataTypes, InferAttributes, InferCreationAttributes, ColumnDescription, DATE } from 'sequelize';
//in node const require and module.exports, and 
//env 
const sequelize = require('./db.js')
const HOST = process.env.HOST || 'localhost'
const PASSWORD = process.env.PASSWORD

class Album extends Model<InferAttributes<Album>, InferCreationAttributes<Album>>{
    declare albumId: number;
    declare name: string;
    declare year: string;
    declare description: string;
    //foreign--> token_id
}

Album.init({
    albumId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    year: DataTypes.NUMBER,
    description: DataTypes.STRING,
    //foreign --> token_id
}, { sequelize, modelName: 'Album' })
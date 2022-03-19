"use strict";
// import { InferAttributes } from "sequelize/types";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//env 
const sequelize = require('./db.ts');
const HOST = process.env.HOST || 'localhost';
const PASSWORD = process.env.PASSWORD;
//Passing parameters
class Artist extends sequelize_1.Model {
}
Artist.init({
    eth_address: sequelize_1.DataTypes.STRING,
    website: sequelize_1.DataTypes.STRING,
    instagram: sequelize_1.DataTypes.STRING,
    twitter: sequelize_1.DataTypes.STRING,
    discord: sequelize_1.DataTypes.STRING,
    spotify: sequelize_1.DataTypes.STRING,
    username: sequelize_1.DataTypes.STRING
}, { sequelize, modelName: 'Artist' });

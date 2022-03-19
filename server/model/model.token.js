"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("./db");
const HOST = process.env.HOST || 'localhost';
const PASSWORD = process.env.PASSWORD;
const Token = db_1.sequelize.define('Token', {
    token_id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    image: {
        type: new sequelize_1.DataTypes.STRING,
        defaultValue: 'no image'
        //should we put in a default image here?
    },
    consumer_points: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true
    },
    quantity: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    number_purchased: {
        type: sequelize_1.DataTypes.NUMBER,
        defaultValue: 0
    },
    token_type: {
        type: new sequelize_1.DataTypes.STRING,
    },
    createdAt: sequelize_1.DataTypes.DATE,
}, {
    tableName: 'tokens'
});
module.exports = Token;

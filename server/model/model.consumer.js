"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("./db");
const HOST = process.env.HOST || 'localhost';
const PASSWORD = process.env.PASSWORD;
const Consumer = db_1.sequelize.define('Consumer', {
    consumer_id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    eth_address: {
        type: new sequelize_1.DataTypes.STRING(64),
        allowNull: false
    },
    username: {
        type: new sequelize_1.DataTypes.STRING(64),
        allowNull: false
    },
    location: {
        type: new sequelize_1.DataTypes.STRING(64),
        defaultValue: 'unnamed location'
    },
    points: {
        type: sequelize_1.DataTypes.NUMBER,
        defaultValue: 0
    },
    createdAt: sequelize_1.DataTypes.DATE,
}, {
    tableName: 'consumers'
});
module.exports = Consumer;

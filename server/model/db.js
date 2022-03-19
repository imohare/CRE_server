"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const { Sequelize } = require('sequelize');
const HOST = process.env.HOST || 'localhost';
const PASSWORD = process.env.PASSWORD;
//Passing parameters
exports.sequelize = new Sequelize('database', 'username', PASSWORD, {
    host: HOST,
    dialect: 'postgres'
});

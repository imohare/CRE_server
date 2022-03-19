"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const { Sequelize } = require('sequelize');
const HOST = process.env.HOST || 'localhost';
const PASSWORD = process.env.PASSWORD;
const USER = process.env.USER;

//Passing parameters
exports.sequelize = new Sequelize('cre', USER, PASSWORD, {
    host: HOST,
    dialect: 'postgres'
});

try {
    sequelize.authenticate();
    sequelize.sync(); //{ alter: true }

    // console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
};

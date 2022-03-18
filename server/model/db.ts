
const { Sequelize } = require('sequelize');
const HOST = process.env.HOST || 'localhost'
const PASSWORD = process.env.PASSWORD


//Passing parameters
export const sequelize = new Sequelize('database', 'username', PASSWORD, {
    host: HOST,
    dialect: 'postgres'
});



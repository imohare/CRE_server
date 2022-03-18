const HOST = process.env.HOST || 'localhost'
const PASSWORD = process.env.PASSWORD

//Connecting to db
const { Sequelize } = require('sequelize');
//import password, username etc from .env


//Passing parameters
const sequelizeThesis = new Sequelize('database', 'username', 'password', {
    host: HOST,
    dialect: 'postgres'
});
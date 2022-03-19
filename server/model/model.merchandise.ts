// import { InferAttributes } from "sequelize/types";
import { Sequelize, Model, DataTypes, InferAttributes, InferCreationAttributes, ColumnDescription, DATE } from 'sequelize';
//in node const require and module.exports, and 
//env 
const sequelize = require('./db.js')
const HOST = process.env.HOST || 'localhost'
const PASSWORD = process.env.PASSWORD

class Merchandise extends Model<InferAttributes<Merchandise>, InferAttributes<Merchandise>>{
    declare merchandise_id: number;
    declare name: string;
    declare type: string;
    declare description: string;
    //foreign--> token id


    //since TS cannot determine modoel asssociations at compile time
    //we have to declare them here purely virtually

}

Merchandise.init({
    merchandise_id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING
}, { sequelize, modelName: 'Merchandise' })
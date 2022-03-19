import { Sequelize, Model, DataTypes, InferAttributes, InferCreationAttributes } from "sequelize/types";

const sequelize = require('./db.js');
const HOST = process.env.HOST || 'localhost';
const PASSWORD = process.env.PASSWORD

//InferAttribute and InferCreaationAtributes extract typings directly from the Model

class Event extends Model<InferAttributes<Event>, InferCreationAttributes<Event>>{
    declare event_id: number;
    declare address: string;
    declare date: Date;
    declare description: string;
}


Event.init({
    event_id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    address: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.STRING

}, { sequelize, modelName: 'Event' })
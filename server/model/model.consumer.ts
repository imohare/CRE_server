import { DataTypes, ModelDefined, Optional} from 'sequelize';
import { sequelize } from './db';
const HOST = process.env.HOST || 'localhost'
const PASSWORD = process.env.PASSWORD

interface ConsumerAttributes {
  consumer_id: number;
  eth_address: string;
  username: string;
  location: string;
  points: number;
  createdAt: Date;
}

type ConsumerCreationAttributes = Optional<ConsumerAttributes, 'location'>;

const Consumer: ModelDefined<
  ConsumerAttributes,
  ConsumerCreationAttributes
> = sequelize.define(
  'Consumer',
  {
    consumer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    eth_address: {
      type: new DataTypes.STRING(64),
      allowNull: false
    },
    username: {
      type: new DataTypes.STRING(64),
      allowNull: false
    },
    location: {
      type: new DataTypes.STRING(64),
      defaultValue: 'unnamed location'
    },
    points: {
      type: DataTypes.NUMBER,
      defaultValue: 0
    },
    createdAt: DataTypes.DATE,
  },
  { 
    tableName: 'consumers'
  }
);

module.exports = Consumer;
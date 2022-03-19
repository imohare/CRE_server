import { DataTypes, ModelDefined, Optional, SmallIntegerDataType} from 'sequelize';
import { sequelize } from './db';

interface TokenAttributes {
  token_id: number;
  image: string;
  consumer_points: number;
  quantity: number;
  number_purchased: number;
  token_type: 'event' | 'album' | 'mechandise';
  createdAt: Date;
}

type TokenCreationAttributes = Optional<TokenAttributes, 'image'>;

const Token: ModelDefined<
TokenAttributes,
TokenCreationAttributes
> = sequelize.define(
  'Token',
  {
    token_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    image: {
      type: new DataTypes.STRING,
      defaultValue: 'no image'
      //should we put in a default image here?
    },
    consumer_points: {
      type: DataTypes.NUMBER,
      allowNull: true
    },
    quantity: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    number_purchased: {
      type: DataTypes.NUMBER,
      defaultValue: 0
    },
    token_type: {
      type: DataTypes.ENUM('event', 'album', 'merchandise')
    },
    createdAt: DataTypes.DATE,
  },
  { 
    tableName: 'tokens'
  }
);

module.exports = Token;
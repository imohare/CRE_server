import {
  Association, 
  DataTypes, 
  Model, 
  Sequelize, 
  HasManyGetAssociationsMixin, 
  HasManyHasAssociationMixin, 
  HasManyAddAssociationMixin
} from 'sequelize';

import { Token } from './token';

class Consumer extends Model {
  public eth_address!: string;
  public username!: string;
  public location?: string;
  public points?: number;
  public email!: string;

  // Auto-generated
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  // Tokens association with methods
  public addToken!: HasManyAddAssociationMixin<Token, number>;
  public getTokens!: HasManyGetAssociationsMixin<Token>;
  
  // Tokens association without methods
  public hasToken!: HasManyHasAssociationMixin<Token, number>
  public hasTokens!: HasManyHasAssociationMixin<Token, number>

  // Populated for inclusions
  public readonly tokens?: Token[];

  public static associations: {
    tokens: Association<Token, Consumer>;
  }

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        eth_address: {
          type: DataTypes.STRING,
          allowNull: false
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
            name: 'consumer_username',
            msg: 'An user with this username already exists.'
          }
        },
        location: {
          type: DataTypes.STRING,
          defaultValue: 'unnamed location'
        },
        points: {
          type: DataTypes.NUMBER,
          defaultValue: 0
        },
        email: {
          type: DataTypes.STRING, 
          allowNull: false
        },
      },
    {sequelize})
  }
}
export { Consumer };

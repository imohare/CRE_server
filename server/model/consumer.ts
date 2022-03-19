import {
  Association,
  DataTypes,
  Model,
  Sequelize,
  HasManyCountAssociationsMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  BelongsToSetAssociationMixin,
  BelongsToGetAssociationMixin
} from 'sequelize';

import { Token } from './token';

class Consumer extends Model {
  public eth_address!: string;
  public username!: string;
  public location?: string;
  public points?: number;
  public email!: string;

  //Auto-generated
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  //Tokens association methods

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
          type: DataTypes.INTEGER,
          defaultValue: 0
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        },
      },
      { sequelize })
  }
}
export { Consumer };

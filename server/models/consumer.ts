import {
  Association,
  DataTypes,
  Model,
  Sequelize,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  HasManyAddAssociationMixin
} from 'sequelize';

import { AlbumToken } from './albumToken';
import { EventToken } from './eventToken';
import { MerchandiseToken } from './merchandiseToken';

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

  // AlbumToken association with methods
  public addAlbumToken!: HasManyAddAssociationMixin<AlbumToken, number>;
  public getTokens!: HasManyGetAssociationsMixin<AlbumToken>;

  // AlbumTokens association without methods
  public hasAlbumToken!: HasManyHasAssociationMixin<AlbumToken, number>
  public hasAlbumTokens!: HasManyHasAssociationMixin<AlbumToken, number>

  // AlbumToken association with methods
  public addEventToken!: HasManyAddAssociationMixin<EventToken, number>;
  public getEventTokens!: HasManyGetAssociationsMixin<EventToken>;
  
  // AlbumTokens association without methods
  public hasMerchandiseToken!: HasManyHasAssociationMixin<AlbumToken, number>
  public hasMerchandiseTokens!: HasManyHasAssociationMixin<MerchandiseToken, number>

  // Populated for inclusions
  public readonly albumTokens?: AlbumToken[];
  public readonly eventTokens?: AlbumToken[];
  public readonly merchandiseTokens?: AlbumToken[];

  public static associations: {
    albumTokens: Association<AlbumToken, Consumer>;
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
export { Consumer }

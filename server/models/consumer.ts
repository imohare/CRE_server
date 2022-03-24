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
  public profile_picture!: string;
  public location?: string;
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

  public readonly albumTokens!: AlbumToken[];
  public readonly eventTokens!: AlbumToken[];
  public readonly merchandiseTokens?: AlbumToken[];

  public static associations: {
    albumTokens: Association<AlbumToken, Consumer>;
  }

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        eth_address: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
            name: 'consumer_eth_address',
            msg: 'A user with this eth_address already exists.'
          }
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
            name: 'consumer_username',
            msg: 'An user with this username already exists.'
          }
        },
        profile_picture: {
          type: DataTypes.STRING,
          defaultValue: "https://firebasestorage.googleapis.com/v0/b/cre-6cbea.appspot.com/o/IMG_0122.jpg?alt=media&token=c53822e2-37ea-4974-b67e-833da7e823f4"
        },
        location: {
          type: DataTypes.STRING,
          defaultValue: 'unnamed location'
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
            name: 'consumer_email',
            msg: 'A user with this email already exists.'
          }
        },
      },
      { sequelize })
  }
}
export { Consumer }

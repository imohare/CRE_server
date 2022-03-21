import {
  Association,
  DataTypes,
  Model,
  Sequelize,
  BelongsToSetAssociationMixin,
  BelongsToGetAssociationMixin,
} from 'sequelize';

import { Album } from './album';
import { Consumer } from './consumer';

class AlbumToken extends Model {
  public image?: string;
  public consumer_points!: number;
  public edition_number!: number;
  public total_editions!: number;
  public token_type!: string;

  // Auto-generated
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  // Album association with methods
  public getAlbum!: BelongsToGetAssociationMixin<Album>;
  public setAlbum!: BelongsToSetAssociationMixin<Album, number>;

  // Consumer association with methods
  public getConsumer!: BelongsToGetAssociationMixin<Consumer>;
  public setConsumer!: BelongsToSetAssociationMixin<Consumer, number>;

  // Populated for inclusions
  public readonly AlbumId!: Album;
  public readonly ConsumerId!: Consumer;

  public static associations: {
    AlbumId: Association<Album, AlbumToken>;
    ConsumerId: Association<Consumer, AlbumToken>;
  }

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        image: {
          type: DataTypes.STRING,
          defaultValue: 'no image uploaded'
        },
        consumer_points: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        edition_number: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        total_editions: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        token_type: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      { sequelize })
  }
}
export { AlbumToken };

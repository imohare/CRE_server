import {
  Association,
  DataTypes,
  Model,
  Sequelize,
  BelongsToSetAssociationMixin,
  BelongsToGetAssociationMixin,
} from 'sequelize';


import { Album } from './album';
import { Artist } from './artist';
import { Consumer } from './consumer';

class AlbumToken extends Model {

  public image?: string;
  public consumer_points!: number;

  // Auto-generated
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  // Artist association with methods
  public getArtist!: BelongsToGetAssociationMixin<Artist>;
  public setArtist!: BelongsToSetAssociationMixin<Artist, number>;

  // Album association with methods
  public getAlbum!: BelongsToGetAssociationMixin<Album>;
  public setAlbum!: BelongsToSetAssociationMixin<Album, number>;

  // Consumer association with methods
  public getConsumer!: BelongsToGetAssociationMixin<Consumer>;
  public setConsumer!: BelongsToSetAssociationMixin<Consumer, number>;

  // Populated for inclusions
  public readonly ArtistId!: Artist;
  public readonly AlbumId!: Album;
  public readonly ConsumerId!: Consumer;

  public static associations: {
    ArtistId: Association<Artist, AlbumToken>;
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
      },
      { sequelize })
  }
}

export { AlbumToken };

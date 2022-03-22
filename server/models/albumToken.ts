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

import { Merchandise } from './merchandise';
import { Consumer } from './consumer';

class MerchandiseToken extends Model {

  public image?: string;
  public consumer_points!: number;
  public edition_number!: number;
  public total_editions!: number;

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

  public readonly associated_to_merchandise!: Merchandise;
  public readonly owned_by?: Consumer;

  public static associations: {
    associated_to_merchandise: Association<Merchandise, MerchandiseToken>;
    owned_by: Association<MerchandiseToken, Consumer>;

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
      },
      { sequelize })
  }
}

export { MerchandiseToken };
export { AlbumToken };

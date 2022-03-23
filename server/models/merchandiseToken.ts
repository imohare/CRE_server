import {
  Association,
  DataTypes,
  Model,
  Sequelize,
  BelongsToSetAssociationMixin,
  BelongsToGetAssociationMixin,
} from 'sequelize';

import { Artist } from './artist';
import { Merchandise } from './merchandise';
import { Consumer } from './consumer';

class MerchandiseToken extends Model {
  public image?: string;
  public consumer_points!: number;

  // Auto-generated
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  // Artist association
  public getArtist!: BelongsToGetAssociationMixin<Artist>;
  public setArtist!: BelongsToSetAssociationMixin<Artist, number>;

  // Merchandise association
  public getMerchandise!: BelongsToGetAssociationMixin<Merchandise>;
  public setMerchandise!: BelongsToSetAssociationMixin<Merchandise, number>;

  // Consumer association
  public getConsumer!: BelongsToGetAssociationMixin<Consumer>;
  public setConsumer!: BelongsToSetAssociationMixin<Consumer, number>;

  // Populated for inclusions
  public readonly ArtistId!: Artist;
  public readonly MerchandiseId!: Merchandise;
  public readonly ConsumerId!: Consumer;

  public static associations: {
    ArtistId: Association<Artist, MerchandiseToken>;
    MerchandiseId: Association<Merchandise, MerchandiseToken>;
    ConsumerId: Association<MerchandiseToken, Consumer>;
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
export { MerchandiseToken };
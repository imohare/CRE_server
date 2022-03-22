import {
  Association,
  DataTypes,
  Model,
  Sequelize,
  BelongsToSetAssociationMixin,
  BelongsToGetAssociationMixin,
} from 'sequelize';

import { Artist } from './artist';
import { Consumer } from './consumer';

class Points extends Model {
  public points!: string;

  // Auto-generated
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  // Artist association with methods
  public getArtist!: BelongsToGetAssociationMixin<Artist>;
  public setArtist!: BelongsToSetAssociationMixin<Artist, number>;

  // Consumer association with methods
  public getConsumer!: BelongsToGetAssociationMixin<Consumer>;
  public setConsumer!: BelongsToSetAssociationMixin<Consumer, number>;

  // Populated for inclusions
  public readonly artist!: Artist;
  public readonly consumer!: Consumer;

  public static associations: {
    associated_artist: Association<Artist, Points>;
    comsumer: Association<Points, Consumer>;
  }

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        points: {
          type: DataTypes.INTEGER,
          defaultValue: 0
        },
      },
      { sequelize })
  }
}
export { Points };

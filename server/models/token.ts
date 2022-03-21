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
import { Event } from './event';
import { Merchandise } from './merchandise';

class Token extends Model {
  public image?: string;
  public consumer_points!: Date;
  public edition_number!: number;
  public total_editions!: number;
  public token_type!: string;

  // Auto-generated
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  // Album association with methods
  public getAlbum?: BelongsToGetAssociationMixin<Album>;
  public setArtist?: BelongsToSetAssociationMixin<Album, number>;

  // Event association with methods
  public getEvent?: BelongsToGetAssociationMixin<Event>;
  public setEvent?: BelongsToSetAssociationMixin<Event, number>;

  // Merchandise association with methods
  public getMerchandise?: BelongsToGetAssociationMixin<Merchandise>;
  public setMerchandise?: BelongsToSetAssociationMixin<Merchandise, number>;

  // Consumer association with methods
  public getConsumer!: BelongsToGetAssociationMixin<Consumer>;
  public setConsumer!: BelongsToSetAssociationMixin<Consumer, number>;

  // Populated for inclusions
  public readonly associated_to_album?: Album;
  public readonly associated_to_event?: Event;
  public readonly associated_to_merchandise?: Merchandise;
  public readonly owned_by?: Consumer;

  public static associations: {
    associated_to_album: Association<Album, Token>;
    associated_to_event: Association<Event, Token>;
    associated_to_merchandise: Association<Merchandise, Token>;
    owned_by: Association<Token, Consumer>;
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
        total_editions: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        token_type: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      { sequelize })
  }
}
export { Token };
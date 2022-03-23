import {
  Association, 
  DataTypes, 
  Model, 
  Sequelize, 
  HasManyCountAssociationsMixin, 
  HasManyGetAssociationsMixin, 
  HasManyHasAssociationMixin, 
  BelongsToSetAssociationMixin, 
  BelongsToGetAssociationMixin,
  HasManyAddAssociationMixin
} from 'sequelize';

import { Artist } from './artist';
import { EventToken } from './eventToken';

class Event extends Model {
  public name!: string;
  public address!: string;
  public date!: Date;
  public description?: string;
  public number_of_tokens!: number;
  public tokens_image!: string;
  public tokens_value!: number;

  //Auto-generated
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  // Artist association with methods
  public getArtist!: BelongsToGetAssociationMixin<Artist>;
  public setArtist!: BelongsToSetAssociationMixin<Artist, number>;

  // Token association with methods
  public countEventTokens!: HasManyCountAssociationsMixin;
  public addEventToken!: HasManyAddAssociationMixin<EventToken, number>; //how do we add like 100 tokens at once?
  public getEventTokens!: HasManyGetAssociationsMixin<EventToken>;

  // Token association without methods
  public hasEventToken!: HasManyHasAssociationMixin<EventToken, number>;
  public hasEventTokens!: HasManyHasAssociationMixin<EventToken, number>;
  
  // Populated for inclusions
  public readonly artist!: Artist;
  public readonly eventTokens?: EventToken[];

  public static associations: {
    artist: Association<Artist, Event>;
    tokens: Association<Event, EventToken>;
  }

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false
        },
        date: {
          type: DataTypes.DATE,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING,
        },
        number_of_tokens: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        tokens_image: {
          type: DataTypes.STRING,
          allowNull: false
        },
        tokens_value: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
      }, 
    {sequelize})
  }
}
export { Event };

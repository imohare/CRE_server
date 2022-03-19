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
import { Token } from './token';

class Event extends Model {
  public name!: string;
  public address!: string;
  public date!: Date;
  public description?: string;

  //Auto-generated
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  // Artist association with methods
  public getArtist!: BelongsToGetAssociationMixin<Artist>;
  public setArtist!: BelongsToSetAssociationMixin<Artist, number>;

  // Token association with methods
  public countTokens!: HasManyCountAssociationsMixin;
  public addToken!: HasManyAddAssociationMixin<Token, number>; //how do we add like 100 tokens at once?
  public getTokens!: HasManyGetAssociationsMixin<Token>;

  // Token association without methods
  public hasToken!: HasManyHasAssociationMixin<Token, number>;
  public hasTokens!: HasManyHasAssociationMixin<Token, number>;
  
  // Populated for inclusions
  public readonly artist!: Artist;
  public readonly tokens?: Token[];

  public static associations: {
    artist: Association<Artist, Event>;
    tokens: Association<Event, Token>;
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
        }
      }, 
    {sequelize})
  }
}
export { Event };

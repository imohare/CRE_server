import {
  Association, 
  DataTypes, 
  Model, 
  Sequelize, 
  HasManyCountAssociationsMixin, 
  HasManyAddAssociationMixin, 
  HasManyGetAssociationsMixin, 
  HasManyHasAssociationMixin, 
  BelongsToSetAssociationMixin, 
  BelongsToGetAssociationMixin
} from 'sequelize';

import { Artist } from './artist';
import { Token } from './token';

class Album extends Model {
  public name!: string;
  public year!: Date;
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
    artist: Association<Artist, Album>;
    tokens: Association<Album, Token>;
  }

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        year: {
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
export { Album };

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
import { MerchandiseToken } from './merchandiseToken';

class Merchandise extends Model {
  public name!: string;
  public type!: string;
  public description?: string;
  public number_of_editions!: number;

  //Auto-generated
  public id!: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  // Artist association with methods
  public getArtist!: BelongsToGetAssociationMixin<Artist>;
  public setArtist!: BelongsToSetAssociationMixin<Artist, number>;

  // Token association with methods
  public countMerchandiseTokens!: HasManyCountAssociationsMixin;
  public addMercandiseToken!: HasManyAddAssociationMixin<MerchandiseToken, number>; //how do we add like 100 tokens at once?
  public getMerchandiseTokens!: HasManyGetAssociationsMixin<MerchandiseToken>;

  // Token association without methods
  public hasMerchandiseToken!: HasManyHasAssociationMixin<MerchandiseToken, number>;
  public hasMerchandiseTokens!: HasManyHasAssociationMixin<MerchandiseToken, number>;
  
  // Populated for inclusions
  public readonly artist!: Artist;
  public readonly merchandiseTokens?: MerchandiseToken[];

  public static associations: {
    artist: Association<Artist, Merchandise>;
    tokens: Association<Merchandise, MerchandiseToken>;
  }

  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING,
        }, 
        number_of_editions: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      }, 
    {sequelize})
  }
}
export { Merchandise };
